import React, { useState } from "react";


const categoryStyles = {
  Academic: { bar: "#C1502E", badgeBg: "#fceae5", badgeText: "#7a2f18" },
  Administrative: { bar: "#B8862E", badgeBg: "#faf0e0", badgeText: "#6b4c17" },
  Career: { bar: "#2F7A78", badgeBg: "#e3f3f2", badgeText: "#1c4a49" },
  Cultural: { bar: "#7D5A75", badgeBg: "#f2ecf1", badgeText: "#4a3546" },
  Sports: { bar: "#3D6B8C", badgeBg: "#e6eef3", badgeText: "#234258" },
  Health: { bar: "#5B7F4F", badgeBg: "#eef3ec", badgeText: "#37492f" },
};

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventCard({event}) {
  const [expanded, setExpanded] = useState(false);
  const style = categoryStyles[event.category] || categoryStyles.Academic;

  const truncated =
    event.content.length > 140
      ? event.content.slice(0, 140).trim() + "…"
      : event.content;

  return (
    <div className="min-h-[300px] w-full bg-[#f7f8fa] flex items-start justify-center p-8">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden"
        style={{ borderLeft: `6px solid ${style.bar}` }}
      >
        <div className="p-7">
          <div className="flex items-center justify-between">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: style.badgeBg, color: style.badgeText }}
            >
              {event.category}
            </span>
            <span className="text-sm text-slate-400">
              {formatDate(event.date)}
            </span>
          </div>

          <h2
            className="mt-4 text-2xl font-bold text-slate-800"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {event.title}
          </h2>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500">
            <span>{event.venue}</span>
            <span>{event.time}</span>
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            {expanded ? event.content : truncated}
          </p>

          {event.content.length > 140 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}