import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTA from '../components/CTA.jsx'
import { services } from '../data/site.js'

export default function Services() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow"><i /> SERVICES</span><h1>Creative support<br />for <em>your story.</em></h1><p>Explore the proposed service categories and contact Impact Media House to discuss your project.</p></div></section>
    <section className="section-pad"><div className="container"><SectionHeading eyebrow="CREATIVE CAPABILITIES" title="Made to communicate." text="These are proposed service categories for review. Only services confirmed by the business should be retained for public launch." /><div className="services-grid services-grid--page">{services.map((service, i) => <ServiceCard key={service.title} service={service} index={i} />)}</div><div className="review-banner"><div><strong>Before publishing</strong><p>Confirm service availability, exact deliverables and any limits. No pricing is published because no rates have been provided.</p></div><Link className="text-link" to="/contact">Ask about a project <ArrowUpRight size={16} /></Link></div></div></section>
    <CTA />
  </>
}
