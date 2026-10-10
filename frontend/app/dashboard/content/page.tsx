"use client";

import { useEffect, useState } from "react";
import { del, get, post, put, useLive } from "@/lib/api";

// ponytail: one config-driven page for all small club resources —
// same CRUD as teams/players pages without 10 copy-paste files.
type Field =
  | { name: string; kind: "text" }
  | { name: string; kind: "number" }
  | { name: string; kind: "datetime" }
  | { name: string; kind: "textarea" }
  | { name: string; kind: "check" }
  | { name: string; kind: "select"; options: string[] }
  | { name: string; kind: "fk"; path: string; label: string };

interface Resource {
  key: string;
  label: string;
  path: string;
  fields: Field[];
  readonly?: boolean;
}

const RESOURCES: Resource[] = [
  { key: "tiers", label: "Ticket Tiers", path: "/api/club/ticket-tiers", fields: [
    { name: "name", kind: "select", options: ["Standard", "Premium", "SeasonPass"] },
    { name: "description", kind: "text" }, { name: "price", kind: "number" },
    { name: "capacity", kind: "number" }, { name: "GameId", kind: "number" } ] },
  { key: "orders", label: "Ticket Orders", path: "/api/club/ticket-orders", readonly: true, fields: [
    { name: "buyerName", kind: "text" }, { name: "email", kind: "text" },
    { name: "qty", kind: "number" }, { name: "status", kind: "select", options: ["pending", "paid", "cancelled"] },
    { name: "GameId", kind: "number" }, { name: "TicketTierId", kind: "number" } ] },
  { key: "news", label: "News", path: "/api/club/news", fields: [
    { name: "tag", kind: "text" }, { name: "title", kind: "text" },
    { name: "excerpt", kind: "textarea" }, { name: "image", kind: "text" },
    { name: "publishedAt", kind: "datetime" } ] },
  { key: "subscribers", label: "Subscribers", path: "/api/club/subscribers", readonly: true, fields: [
    { name: "email", kind: "text" } ] },
  { key: "bookings", label: "Bookings", path: "/api/club/bookings", fields: [
    { name: "title", kind: "text" }, { name: "time", kind: "text" },
    { name: "capacity", kind: "number" },
    { name: "status", kind: "select", options: ["Available", "Full"] } ] },
  { key: "prospects", label: "Draft Prospects", path: "/api/club/prospects", fields: [
    { name: "name", kind: "text" }, { name: "position", kind: "text" },
    { name: "notes", kind: "textarea" }, { name: "TeamId", kind: "number" } ] },
  { key: "broadcasts", label: "Broadcasts", path: "/api/club/broadcasts", fields: [
    { name: "audience", kind: "text" },
    { name: "channel", kind: "select", options: ["SMS", "Push", "Email"] },
    { name: "message", kind: "textarea" } ] },
  { key: "products", label: "Products", path: "/api/club/products", fields: [
    { name: "name", kind: "text" }, { name: "price", kind: "number" },
    { name: "image", kind: "text" }, { name: "stock", kind: "number" } ] },
  { key: "inquiries", label: "Inquiries", path: "/api/club/inquiries", readonly: true, fields: [
    { name: "type", kind: "select", options: ["Contact", "Sponsorship", "Clinic", "Waitlist"] },
    { name: "name", kind: "text" }, { name: "email", kind: "text" },
    { name: "message", kind: "textarea" } ] },
  { key: "plays", label: "Play-by-Play", path: "/api/club/plays", fields: [
    { name: "time", kind: "text" }, { name: "play", kind: "text" },
    { name: "score", kind: "text" },
    { name: "type", kind: "select", options: ["score", "rebound", "assist", "steal", "block", "other"] },
    { name: "GameId", kind: "number" } ] },
];

type Row = Record<string, string | number | boolean | null>;

const inputCls =
  "w-full bg-surface border border-outline-variant px-4 py-2 text-sm focus:ring-2 focus:ring-primary-container font-body";

function FieldInput({ field, value }: { field: Field; value: unknown }) {
  const str = value == null ? "" : String(value);
  if (field.kind === "fk") {
    const opts = useLive<Row[]>(field.path, []);
    return (
      <select name={field.name} defaultValue={str} className={inputCls}>
        <option value="">—</option>
        {opts.map((o) => (
          <option key={String(o.id)} value={String(o.id)}>
            #{String(o.id)} — {String(o[field.label] ?? "")}
          </option>
        ))}
      </select>
    );
  }
  if (field.kind === "select")
    return (
      <select name={field.name} defaultValue={str} className={inputCls}>
        {field.options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    );
  if (field.kind === "textarea")
    return <textarea name={field.name} defaultValue={str} className={`${inputCls} h-20 resize-none`} />;
  if (field.kind === "check")
    return <input type="checkbox" name={field.name} defaultChecked={value === true} className="w-4 h-4" />;
  return (
    <input
      type={field.kind === "number" ? "number" : field.kind === "datetime" ? "datetime-local" : "text"}
      step={field.kind === "number" ? "any" : undefined}
      name={field.name}
      defaultValue={field.kind === "datetime" && str ? new Date(str).toISOString().slice(0, 16) : str}
      className={inputCls}
    />
  );
}

export default function ContentPage() {
  const [active, setActive] = useState<Resource>(RESOURCES[0]);
  const live = useLive<Row[]>(active.path, []);
  const [rows, setRows] = useState<Row[]>([]);
  useEffect(() => setRows(live), [live, active]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Row | null>(null);
  const cols = ["id", ...active.fields.map((f) => f.name)];

  const refresh = async () => {
    const fresh = await get<Row[]>(active.path);
    if (fresh) setRows(fresh);
  };

  return (
    <div>
      <header className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-6">
        <div>
          <p className="font-headline text-xs text-secondary uppercase tracking-widest mb-1">Content Management</p>
          <h2 className="font-headline text-4xl text-on-surface">{active.label}</h2>
        </div>
        {!active.readonly && (
          <button
            onClick={() => { setEditing(null); setShowForm(true); }}
            className="bg-primary text-on-primary px-6 py-2 font-headline text-xs hover:bg-opacity-90 transition-all shadow-md"
          >
            ADD {active.label.toUpperCase().slice(0, -1)}
          </button>
        )}
      </header>

      <div className="flex flex-wrap gap-2 mb-6">
        {RESOURCES.map((r) => (
          <button
            key={r.key}
            onClick={() => { setActive(r); setShowForm(false); setEditing(null); }}
            className={`px-3 py-1.5 font-headline text-xs uppercase tracking-wider transition-all ${
              active.key === r.key ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant text-on-surface-variant font-headline text-xs">
                {cols.map((c, i) => (
                  <th key={c} className={`p-4 capitalize ${i === 0 ? "sticky left-0 bg-surface-container-low z-10" : ""}`}>{c}</th>
                ))}
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {rows.map((row) => (
                <tr key={String(row.id)} className="hover:bg-primary/5 transition-colors">
                  {cols.map((c, i) => (
                    <td key={c} className={`p-4 font-body text-sm text-on-surface max-w-[240px] truncate ${i === 0 ? "sticky left-0 bg-surface-container-lowest z-10" : ""}`}>
                      {row[c] == null ? "—" : String(row[c]).slice(0, 60)}
                    </td>
                  ))}
                  <td className="p-4 text-right whitespace-nowrap">
                    {!active.readonly && (
                      <button onClick={() => { setEditing(row); setShowForm(true); }} className="text-primary hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    )}
                    <button
                      onClick={async () => { await del(`${active.path}/${row.id}`); refresh(); }}
                      className="text-error ml-4 hover:scale-110 transition-transform"
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {rows.length === 0 && (
          <p className="p-8 text-center font-body text-on-surface-variant">No {active.label.toLowerCase()} yet.</p>
        )}
      </div>

      {showForm && !active.readonly && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4 overflow-y-auto">
          <div className="bg-surface-container-lowest border border-outline-variant p-6 md:p-12 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto my-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-2xl text-on-surface">
                {editing ? `Edit ${active.label.slice(0, -1)}` : `Add ${active.label.slice(0, -1)}`}
              </h3>
              <button onClick={() => setShowForm(false)} className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const body: Row = {};
                for (const f of active.fields) {
                  if (f.kind === "check") {
                    body[f.name] = fd.get(f.name) === "on";
                  } else if (f.kind === "number") {
                    const v = fd.get(f.name);
                    body[f.name] = v === null || v === "" ? null : Number(v);
                  } else {
                    const v = String(fd.get(f.name) || "");
                    body[f.name] = v === "" ? null : v;
                  }
                }
                if (editing) await put(`${active.path}/${editing.id}`, body);
                else await post(active.path, body);
                refresh();
                setShowForm(false);
              }}
              className="space-y-4"
            >
              {active.fields.map((f) => (
                <div key={f.name}>
                  <label className="font-headline text-xs text-on-surface-variant block mb-1 capitalize">{f.name}</label>
                  <FieldInput field={f} value={editing?.[f.name]} />
                </div>
              ))}
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 border-2 border-outline-variant py-4 font-headline text-xs text-on-surface hover:bg-surface-container-high transition-all">
                  CANCEL
                </button>
                <button type="submit" className="flex-1 bg-primary text-on-primary py-4 font-headline text-xs hover:bg-opacity-90 transition-all shadow-md">
                  {editing ? "UPDATE" : "ADD"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
