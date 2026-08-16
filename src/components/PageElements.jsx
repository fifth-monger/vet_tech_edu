import { Link } from 'react-router'
import { Icon } from './Icon.jsx'

export function Pill({ children, tone = 'blue' }) { return <span className={`pill pill--${tone}`}>{children}</span> }
export function ButtonLink({ children, to, variant = 'primary' }) { return <Link className={`button button--${variant}`} to={to}>{children}<Icon name="arrow" size={18} /></Link> }
export function PageIntro({ eyebrow, title, description, children }) { return <header className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{description && <p className="page-intro__description">{description}</p>}{children}</header> }
export function Breadcrumbs({ items }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol>{items.map((item, index) => <li key={item.label}>{item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}{index < items.length - 1 && <span aria-hidden="true">/</span>}</li>)}</ol></nav>
}
export function ProgressBar({ value, label }) {
  return <div className="progress-bar-wrap"><div className="progress-copy"><span>{label}</span><strong>{value}%</strong></div><div className="progress-bar" role="progressbar" aria-label={label} aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}><span style={{ width: `${value}%` }} /></div></div>
}
