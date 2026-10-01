export default function ProgressBar({ value, max, label }) {
  const percentage = max > 0 ? Math.round((value / max) * 100) : 0
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3 text-xs text-slate-600">
        <span>{label}</span><span>{value} of {max} complete</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div className="h-full rounded-full bg-violet-600 transition-[width]" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}
