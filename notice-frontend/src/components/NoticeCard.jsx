import { useState } from "react";
import { CATEGORY_META } from "../../data/Notice";

// Optional: tweak per-category accent colors while staying inside the
// light-blue/white theme. Falls back to sky if a category isn't listed.
const CATEGORY_STYLES = {
  Academic: "bg-sky-50 text-sky-700 border-sky-100",
  Urgent: "bg-rose-50 text-rose-700 border-rose-100",
  Event: "bg-indigo-50 text-indigo-700 border-indigo-100",
  General: "bg-slate-50 text-slate-600 border-slate-100",
};

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function NoticeCard({ notice }) {
  const [expanded, setExpanded] = useState(false);
  const { title, category, postedDate, content } = notice;

  const badgeStyle = CATEGORY_STYLES[category] || CATEGORY_STYLES.General;
  const isLong = content.length > 160;
  const previewText =
    !expanded && isLong ? content.slice(0, 160).trimEnd() + "…" : content;

  return (
    <article className="relative bg-white border border-sky-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-5 sm:p-6 overflow-hidden">
      {/* Left accent bar */}
      <span className="absolute left-0 top-0 h-full w-1.5 " style={{ backgroundColor: CATEGORY_META[category] }} />

      <div className="pl-3">
        {/* Top row: category + date */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span
            className={
              "px-3 py-1 rounded-full text-xs font-semibold border " + badgeStyle
            }
          >
            {category}
          </span>
          <time
            dateTime={postedDate}
            className="text-xs text-slate-400 font-medium whitespace-nowrap"
          >
            {formatDate(postedDate)}
          </time>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-bold text-slate-800 leading-snug mb-2">
          {title}
        </h3>

        {/* Content */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {previewText}
        </p>

        {/* Read more / less toggle */}
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
    </article>
  );
}