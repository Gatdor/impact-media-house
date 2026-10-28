import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { portfolioItems } from '../data/site.js'
import CTA from '../components/CTA.jsx'

export default function Project() {
  const { slug } = useParams()
  const item = portfolioItems.find((project) => project.slug === slug)
  if (!item) return <section className="not-found container"><span className="eyebrow"><i /> PROJECT NOT FOUND</span><h1>This project isn't here.</h1><p>The project may have been moved or its link may be incorrect.</p><Link className="button button--dark" to="/portfolio">Back to portfolio <ArrowLeft size={16} /></Link></section>
  return <><section className="project-detail section-pad"><div className="container"><Link className="back-link" to="/portfolio"><ArrowLeft size={16} /> Back to portfolio</Link><div className="project-detail__header"><span className="eyebrow"><i /> {item.category}</span><h1>{item.title}</h1><p>{item.description}</p></div><img className="project-detail__image" src={item.image} alt={item.placeholder ? 'Placeholder image for a future approved portfolio project' : item.title} /><div className="portfolio-disclaimer"><strong>{item.placeholder ? 'Demo placeholder' : 'Project details'}</strong><p>{item.placeholder ? 'This is not a genuine company project. Replace this content with an approved case study before launch.' : item.description}</p></div><Link className="text-link text-link--large" to="/contact">Enquire about similar work <ArrowUpRight size={17} /></Link></div></section><CTA /></>
}
