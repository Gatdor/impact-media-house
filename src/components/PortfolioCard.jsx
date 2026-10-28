import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function PortfolioCard({ item }) {
  return <article className={`portfolio-card ${item.placeholder ? 'portfolio-card--placeholder' : ''}`}>
    <Link to={`/portfolio/${item.slug}`} className="portfolio-card__image" aria-label={`View ${item.title}`}>
      <img src={item.image} alt={item.placeholder ? 'Illustrative placeholder — replace with approved project media' : item.title} loading="lazy" />
      <span className="portfolio-card__arrow"><ArrowUpRight size={21} /></span>
    </Link>
    <div className="portfolio-card__meta"><span>{item.category}</span>{item.placeholder && <span className="draft-label">Placeholder</span>}</div>
    <h3><Link to={`/portfolio/${item.slug}`}>{item.title}</Link></h3>
    {item.placeholder && <p className="placeholder-note">Demo tile — not a real company project.</p>}
  </article>
}
