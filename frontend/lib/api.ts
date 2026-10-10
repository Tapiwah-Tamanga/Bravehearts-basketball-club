"use client";

import { useEffect, useState } from "react";

// ponytail: one tiny client for the whole frontend — API first, mock fallback
// so pages never blank (static build, backend down). Override with
// frontend/.env.local: NEXT_PUBLIC_API_URL=http://localhost:3000
export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

async function api<T>(path: string, init?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      // ponytail: Express sends no Cache-Control — without no-store the
      // browser serves stale lists and admin edits "don't reflect".
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      ...init,
    });
    if (!res.ok) {
      console.warn(`[api] ${path} → HTTP ${res.status}, using static fallback`);
      return null;
    }
    const json = await res.json();
    return (json.data ?? json.players ?? json) as T;
  } catch (e) {
    console.warn(`[api] ${path} unreachable (${API_BASE}) — using static fallback`, e);
    return null;
  }
}

export const get = <T,>(path: string) => api<T>(path);
export const post = <T,>(path: string, body: unknown) =>
  api<T>(path, { method: "POST", body: JSON.stringify(body) });
export const put = <T,>(path: string, body: unknown) =>
  api<T>(path, { method: "PUT", body: JSON.stringify(body) });
export const del = (path: string) =>
  api<unknown>(path, { method: "DELETE" });

// Fetch live data, keep mock as initial/fallback value.
export function useLive<T>(key: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback);
  useEffect(() => {
    let live = true;
    get<T>(key).then((d) => {
      if (live && d) setData(d);
    });
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return data;
}
