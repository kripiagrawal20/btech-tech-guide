import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.to && index !== items.length - 1
              ? <Link className="hover:text-violet-700" to={item.to}>{item.label}</Link>
              : <span aria-current={index === items.length - 1 ? 'page' : undefined} className={index === items.length - 1 ? 'font-medium text-slate-800' : ''}>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
