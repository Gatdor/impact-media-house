import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
export default function NotFound() { return <section className="not-found container"><span className="eyebrow"><i /> 404 / PAGE NOT FOUND</span><h1>This page took<br /><em>a wrong turn.</em></h1><p>The page may have moved, or the address may be incorrect.</p><Link className="button button--dark" to="/"><ArrowLeft size={16} /> Return home</Link></section> }
