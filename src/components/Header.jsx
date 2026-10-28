import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Brand from './Brand.jsx'

const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Portfolio', '/portfolio'], ['Contact', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand onClick={close} />
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={close}>{label}</NavLink>)}
          <Link className="button button--dark nav-cta" to="/contact" onClick={close}>Start a project <ArrowUpRight size={16} /></Link>
        </nav>
      </div>
    </header>
  )
}
