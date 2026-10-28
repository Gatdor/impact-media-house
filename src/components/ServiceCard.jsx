import { ArrowUpRight, Camera, Clapperboard, Palette, Video } from 'lucide-react'
import { Link } from 'react-router-dom'

const icons = { camera: Camera, video: Video, palette: Palette, clapperboard: Clapperboard }
export default function ServiceCard({ service, index = 0 }) {
  const Icon = icons[service.icon] || Camera
  return <article className="service-card">
    <div className="service-card__top"><span className="service-number">0{index + 1}</span><span className="service-icon"><Icon size={22} strokeWidth={1.7} /></span></div>
    <h3>{service.title}</h3><p>{service.description}</p>
    <Link to="/contact" className="text-link">Enquire about this <ArrowUpRight size={16} /></Link>
  </article>
}
