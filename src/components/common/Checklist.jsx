import { useState } from 'react'
import ProgressBar from './ProgressBar.jsx'

export default function Checklist({ title, items }) {
  const [checked, setChecked] = useState({})
  const complete = Object.values(checked).filter(Boolean).length
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">{title}</h2>
      <div className="mt-4"><ProgressBar value={complete} max={items.length} label="Checklist progress" /></div>
      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={item}>
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700">
              <input
                className="mt-1 size-4 shrink-0 accent-violet-600"
                type="checkbox"
                checked={Boolean(checked[index])}
                onChange={(event) => setChecked((current) => ({ ...current, [index]: event.target.checked }))}
              />
              <span className={checked[index] ? 'text-slate-400 line-through' : ''}>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
