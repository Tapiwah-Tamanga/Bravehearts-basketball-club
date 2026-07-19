"use client";

import { useState } from "react";
import { events as initialEvents } from "@/lib/mock-data";
import type { Event } from "@/types";

export default function EventsPage() {
  const [eventList, setEventList] = useState<Event[]>(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const handleDelete = (id: number) => {
    setEventList(eventList.filter((e) => e.id !== id));
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-end mb-xl">
        <div>
          <p className="font-headline text-label-caps text-secondary uppercase tracking-widest mb-xs">
            Event Management
          </p>
          <h2 className="font-headline text-headline-lg text-on-surface">
            Upcoming Events
          </h2>
        </div>
        <button
          onClick={() => {
            setEditingEvent(null);
            setShowForm(true);
          }}
          className="bg-primary text-on-primary px-lg py-sm font-headline text-label-caps hover:bg-opacity-90 transition-all shadow-md flex items-center gap-sm"
        >
          <span className="material-symbols-outlined text-sm">event</span>
          ADD EVENT
        </button>
      </header>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {eventList.map((event, i) => (
          <div
            key={event.id}
            className="bg-surface-container-lowest border border-outline-variant overflow-hidden shadow-sm group hover:border-primary transition-all animate-stagger-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="aspect-video relative overflow-hidden bg-surface-container-high">
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-md left-md right-md">
                <h3 className="font-headline text-headline-md font-black uppercase text-white">
                  {event.title}
                </h3>
              </div>
            </div>
            <div className="p-md">
              <div className="flex items-center gap-md mb-sm text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-primary text-lg">
                  calendar_today
                </span>
                <span className="font-body">
                  {new Date(event.eventDate).toLocaleDateString("en-MW", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-md mb-md text-on-surface-variant text-sm">
                <span className="material-symbols-outlined text-primary text-lg">
                  location_on
                </span>
                <span className="font-body">{event.location}</span>
              </div>
              <p className="font-body text-sm text-on-surface-variant mb-md line-clamp-2">
                {event.description}
              </p>
              <div className="flex gap-sm">
                <button
                  onClick={() => handleEdit(event)}
                  className="flex-1 border border-outline-variant py-sm font-headline text-label-caps text-on-surface hover:bg-surface-container-high transition-all"
                >
                  EDIT
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="flex-1 border border-error/30 py-sm font-headline text-label-caps text-error hover:bg-error/5 transition-all"
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-surface-container-lowest border border-outline-variant p-xl w-full max-w-lg shadow-2xl">
            <div className="flex justify-between items-center mb-lg">
              <h3 className="font-headline text-headline-md text-on-surface">
                {editingEvent ? "Edit Event" : "Add New Event"}
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-on-surface-variant hover:text-primary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowForm(false);
              }}
              className="space-y-md"
            >
              <div>
                <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                  Event Title
                </label>
                <input
                  type="text"
                  defaultValue={editingEvent?.title || ""}
                  className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                />
              </div>
              <div>
                <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                  Description
                </label>
                <textarea
                  defaultValue={editingEvent?.description || ""}
                  className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body h-24 resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-md">
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                    Location
                  </label>
                  <input
                    type="text"
                    defaultValue={editingEvent?.location || ""}
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
                </div>
                <div>
                  <label className="font-headline text-label-caps text-on-surface-variant block mb-xs">
                    Event Date
                  </label>
                  <input
                    type="datetime-local"
                    defaultValue={
                      editingEvent
                        ? new Date(editingEvent.eventDate)
                            .toISOString()
                            .slice(0, 16)
                        : ""
                    }
                    className="w-full bg-surface border border-outline-variant px-md py-sm text-sm focus:ring-2 focus:ring-primary-container font-body"
                  />
                </div>
              </div>
              <div className="flex gap-md pt-md">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border-2 border-outline-variant py-md font-headline text-label-caps text-on-surface hover:bg-surface-container-high transition-all"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-on-primary py-md font-headline text-label-caps hover:bg-opacity-90 transition-all shadow-md"
                >
                  {editingEvent ? "UPDATE EVENT" : "ADD EVENT"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
