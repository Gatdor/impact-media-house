import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function CTA() {
  return <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow eyebrow--light"><i /> YOUR NEXT STORY STARTS HERE</span><h2>Let's create something<br /><em>that matters.</em></h2><p>Have a story to tell, an event to document, or a creative project in mind? Let's talk.</p></div><Link className="button button--light" to="/contact">Start a project <ArrowUpRight size={18} /></Link><span className="cta-mark" aria-hidden="true">IM</span></div></section>
}
