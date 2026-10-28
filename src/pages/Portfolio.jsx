import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PortfolioCard from '../components/PortfolioCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTA from '../components/CTA.jsx'
import { portfolioItems } from '../data/site.js'

export default function Portfolio() {
  const categories = ['All work', ...new Set(portfolioItems.map((item) => item.category))]
  const [active, setActive] = useState('All work')
  const filtered = useMemo(() => active === 'All work' ? portfolioItems : portfolioItems.filter((item) => item.category === active), [active])
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow"><i /> PORTFOLIO</span><h1>Work that tells<br /><em>a story.</em></h1><p>A growing space for approved projects, visual stories and creative work by Impact Media House.</p></div></section>
    <section className="section-pad"><div className="container"><div className="portfolio-heading-row"><SectionHeading eyebrow="THE WORK" title="Selected projects" text="Portfolio examples will appear here once genuine project assets and descriptions are supplied." /><Link className="text-link" to="/contact">Discuss a similar project <ArrowUpRight size={16} /></Link></div><div className="filter-row" role="group" aria-label="Filter portfolio by category">{categories.map((category) => <button key={category} type="button" className={`filter-chip ${active === category ? 'filter-chip--active' : ''}`} aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>)}</div><div className="portfolio-grid portfolio-grid--page">{filtered.map((item) => <PortfolioCard key={item.slug} item={item} />)}</div><div className="portfolio-disclaimer"><strong>Portfolio placeholders</strong><p>Every item currently shown is a demo placeholder, not a real project. Replace them with media that Impact Media House owns or has permission to publish.</p></div></div></section>
    <CTA />
  </>
}
