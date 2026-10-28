import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Brand from './Brand.jsx'
import { FACEBOOK_URL, services } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand-col">
          <Brand footer />

          <p>
            Creative stories and visual communication rooted in Kakuma, Kenya.
          </p>

          <a
            className="social-link"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="facebook-letter" aria-hidden="true">
              f
            </span>
            Follow on Facebook
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Creative services</h3>
          {services.slice(0, 4).map((service) => (
            <Link key={service.title} to="/services">
              {service.title}
            </Link>
          ))}
        </div>

        <div>
          <h3>Start a conversation</h3>
          <p className="footer-small">
            Have a project in mind? Share a few details and we can discuss the
            next step.
          </p>
          <Link className="footer-cta" to="/contact">
            Make an enquiry <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Impact Media House.</span>

        <span>
          <Link to="/privacy">Privacy</Link>
          <span className="footer-dot">•</span>
          <span>Made for stories that matter.</span>
        </span>
      </div>
    </footer>
  )
}