"use client";

import React, { useMemo, useState } from "react";

export type AnalyticsExplorerDay = {
  day: string;
  sessions: string;
  pageViews: string;
  leads: string;
};

export type AnalyticsExplorerEvent = {
  id: string;
  eventName: string;
  path: string;
  createdAt: string;
  metadata: Record<string, unknown>;
};

export type AnalyticsExplorerSession = {
  sessionId: string;
  startedDay: string;
  visitorId: string | null;
  landingPage: string | null;
  referrer: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  startedAt: string;
  lastSeenAt: string;
  eventCount: string;
  leadCount: string;
  leadTypes: string | null;
  events: AnalyticsExplorerEvent[];
};

type Props = {
  days: AnalyticsExplorerDay[];
  sessions: AnalyticsExplorerSession[];
};

function numberValue(value: string) {
  return Number(value) || 0;
}

function dayTotal(day: AnalyticsExplorerDay) {
  return numberValue(day.sessions) + numberValue(day.pageViews) + numberValue(day.leads);
}

function percentOf(value: number, max: number) {
  return `${Math.max(4, Math.round((value / Math.max(1, max)) * 100))}%`;
}

function formatDay(value: string) {
  return new Intl.DateTimeFormat("en", { day: "2-digit", month: "short" }).format(new Date(`${value}T12:00:00`));
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function formatTime(value: string) {
  return new Intl.DateTimeFormat("en", { hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function sourceLabel(session: AnalyticsExplorerSession) {
  return session.utmSource || session.referrer || "Direct";
}

function campaignLabel(session: AnalyticsExplorerSession) {
  return session.utmCampaign || session.utmMedium || "-";
}

function metadataLabel(metadata: Record<string, unknown>) {
  const entries = Object.entries(metadata).filter(([, value]) => value !== null && value !== undefined && value !== "");

  if (entries.length === 0) {
    return "";
  }

  return entries
    .slice(0, 4)
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join(" · ");
}

export default function AdminAnalyticsExplorer({ days, sessions }: Props) {
  const [selectedDay, setSelectedDay] = useState<AnalyticsExplorerDay | null>(null);
  const [openSessionId, setOpenSessionId] = useState<string | null>(null);
  const maxDaily = useMemo(() => Math.max(1, ...days.map(dayTotal)), [days]);
  const sessionsByDay = useMemo(() => {
    const groups = new Map<string, AnalyticsExplorerSession[]>();

    for (const session of sessions) {
      const current = groups.get(session.startedDay) || [];
      current.push(session);
      groups.set(session.startedDay, current);
    }

    return groups;
  }, [sessions]);
  const selectedSessions = selectedDay ? sessionsByDay.get(selectedDay.day) || [] : [];

  const openDay = (day: AnalyticsExplorerDay) => {
    setSelectedDay(day);
    setOpenSessionId(null);
  };

  const closeModal = () => {
    setSelectedDay(null);
    setOpenSessionId(null);
  };

  return (
    <>
      <div className="mt-8 grid grid-cols-7 gap-2 lg:grid-cols-[repeat(14,minmax(0,1fr))]">
        {days.map((day) => {
          const total = dayTotal(day);

          return (
            <button
              key={day.day}
              type="button"
              onClick={() => openDay(day)}
              className="group flex min-h-40 flex-col justify-end rounded-2xl border border-white/10 bg-white/[0.03] p-2 text-left transition-colors hover:border-[#8fc7e8]/70 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#8fc7e8]"
              aria-label={`Open sessions for ${formatDay(day.day)}`}
            >
              <div className="mb-2 flex flex-1 items-end">
                <div className="w-full rounded-xl bg-[#8fc7e8] transition-colors group-hover:bg-white" style={{ height: percentOf(total, maxDaily) }}></div>
              </div>
              <div className="text-center text-[10px] text-white/35 group-hover:text-white">{formatDay(day.day)}</div>
              <div className="mt-1 text-center text-[10px] text-white/25">{day.sessions} s / {day.pageViews} pv</div>
            </button>
          );
        })}
      </div>

      {selectedDay && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] shadow-2xl">
            <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">{formatDay(selectedDay.day)}</div>
                <h3 className="mt-2 text-3xl font-medium tracking-tight text-white">Sessions for selected day</h3>
                <p className="mt-2 text-sm text-white/45">
                  {selectedDay.sessions} sessions · {selectedDay.pageViews} page views · {selectedDay.leads} attributed leads
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xl text-white transition-colors hover:bg-white hover:text-black"
                aria-label="Close sessions modal"
              >
                x
              </button>
            </div>

            <div className="max-h-[calc(88vh-132px)] overflow-y-auto p-4 sm:p-6">
              <div className="space-y-3">
                {selectedSessions.map((session) => {
                  const isOpen = openSessionId === session.sessionId;

                  return (
                    <div key={session.sessionId} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                      <button
                        type="button"
                        onClick={() => setOpenSessionId(isOpen ? null : session.sessionId)}
                        className="grid w-full grid-cols-1 gap-4 p-5 text-left transition-colors hover:bg-white/[0.04] lg:grid-cols-[1.2fr_1fr_0.7fr_0.7fr_auto]"
                      >
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Landing page</div>
                          <div className="mt-2 truncate text-sm font-medium text-white">{session.landingPage || "-"}</div>
                          <div className="mt-1 truncate text-xs text-white/35">{session.sessionId}</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Source</div>
                          <div className="mt-2 truncate text-sm text-white/70">{sourceLabel(session)}</div>
                          <div className="mt-1 truncate text-xs text-white/35">{campaignLabel(session)}</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Activity</div>
                          <div className="mt-2 text-sm text-white/70">{session.eventCount} events</div>
                          <div className="mt-1 text-xs text-white/35">{session.leadCount} leads</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Last seen</div>
                          <div className="mt-2 text-sm text-white/70">{formatTime(session.lastSeenAt)}</div>
                          <div className="mt-1 text-xs text-white/35">{formatDateTime(session.startedAt)}</div>
                        </div>
                        <div className="flex items-center justify-start text-2xl text-white/45 lg:justify-end">{isOpen ? "-" : "+"}</div>
                      </button>

                      {isOpen && (
                        <div className="border-t border-white/10 bg-black/20 p-5">
                          <div className="grid grid-cols-1 gap-3 pb-5 text-sm sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Visitor</div>
                              <div className="mt-2 truncate text-white/70">{session.visitorId || "-"}</div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Referrer</div>
                              <div className="mt-2 truncate text-white/70">{session.referrer || "Direct"}</div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Lead types</div>
                              <div className="mt-2 truncate text-white/70">{session.leadTypes || "-"}</div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {session.events.map((event) => {
                              const metadata = metadataLabel(event.metadata);

                              return (
                                <div key={event.id} className="grid grid-cols-[76px_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                  <div className="text-xs text-white/35">{formatTime(event.createdAt)}</div>
                                  <div>
                                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                      <span className="text-sm font-bold text-white">{event.eventName}</span>
                                      <span className="truncate text-xs text-white/35">{event.path}</span>
                                    </div>
                                    {metadata && <div className="mt-2 text-xs text-white/35">{metadata}</div>}
                                  </div>
                                </div>
                              );
                            })}

                            {session.events.length === 0 && (
                              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center text-sm text-white/40">
                                No events recorded for this session.
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {selectedSessions.length === 0 && (
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center text-sm text-white/45">
                    No tracked sessions for this day.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
