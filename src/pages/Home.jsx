import { ArrowDownRight, ArrowUpRight, Play, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import PortfolioCard from '../components/PortfolioCard.jsx'
import CTA from '../components/CTA.jsx'
import { services, portfolioItems } from '../data/site.js'

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero__image" role="img" aria-label="Atmospheric creative studio visual placeholder" />
      <div className="hero__grain" />
      <div className="container hero__content">
        <span className="eyebrow eyebrow--light"><i /> CREATIVE MEDIA · KAKUMA, KENYA</span>
        <h1>Creative stories.<br /><span>Powerful visuals.</span><br />Lasting impact.</h1>
        <p>Bringing stories, people, and ideas to life through creative media and visual storytelling in Kakuma and beyond.</p>
        <div className="hero__actions"><Link className="button button--red" to="/portfolio">Explore our work <ArrowUpRight size={17} /></Link><Link className="button button--outline-light" to="/contact">Work with us <ArrowUpRight size={17} /></Link></div>
        <div className="hero__bottom"><span><span className="hero-dot" /> STORIES WITH PURPOSE</span><a href="#intro">Scroll to explore <ArrowDownRight size={16} /></a></div>
      </div>
      <div className="hero__index" aria-hidden="true">IMH / 001</div>
    </section>

    <section className="intro-section section-pad" id="intro"><div className="container intro-grid">
      <div className="intro-image-wrap"><img src="/images/portfolio-placeholder.svg" alt="Placeholder for an authentic Impact Media House behind-the-scenes image" loading="lazy" /><span className="image-caption">REAL STORIES. HUMAN PERSPECTIVES.</span></div>
      <div className="intro-copy"><span className="eyebrow"><i /> ABOUT IMPACT</span><h2>Every story deserves<br />to be <em>seen.</em></h2><p>Impact Media House is a creative media brand based in Kakuma, Kenya. This website is designed to bring its work into one clear, professional home and make it easier for people and organizations to explore creative possibilities.</p><p>Our focus is visual storytelling that helps people communicate with clarity, care and purpose.</p><Link className="text-link text-link--large" to="/about">Get to know us <ArrowUpRight size={17} /></Link><div className="intro-stamp"><Sparkles size={19} /><span>CREATIVITY<br />WITH PURPOSE</span></div></div>
    </div></section>

    <section className="services-section section-pad"><div className="container"><div className="section-row"><SectionHeading eyebrow="WHAT WE CAN CREATE" title={<>Creative services,<br /><em>thoughtfully delivered.</em></>} text="Explore the creative areas planned for this website. The final published service list should be confirmed by the Impact Media House team." /><Link className="text-link section-more" to="/services">View all services <ArrowUpRight size={17} /></Link></div><div className="services-grid">{services.map((service, i) => <ServiceCard key={service.title} service={service} index={i} />)}</div><p className="content-notice">Service descriptions are draft website copy and require business confirmation before launch.</p></div></section>

    <section className="portfolio-section section-pad"><div className="container"><div className="section-row"><SectionHeading eyebrow="SELECTED WORK" title={<>A home for stories<br /><em>worth sharing.</em></>} text="A portfolio designed to showcase approved photography, video, design and media projects." /><Link className="text-link section-more" to="/portfolio">Explore portfolio <ArrowUpRight size={17} /></Link></div><div className="portfolio-grid">{portfolioItems.map((item) => <PortfolioCard key={item.slug} item={item} />)}</div><div className="portfolio-footnote"><span><Play size={14} /> PORTFOLIO STRUCTURE PREPARED</span><p>Project placeholders are clearly marked and must be replaced with real, approved work.</p></div></div></section>

    <section className="values-section section-pad"><div className="container values-grid"><div><span className="eyebrow eyebrow--light"><i /> THE IMPACT APPROACH</span><h2>Good creative work<br />starts with <em>listening.</em></h2><p>Strong communication begins with understanding the story, the audience and the reason it matters. The site is built around that principle: clear information, purposeful visuals and an easy path to start a conversation.</p><Link className="button button--outline-light" to="/contact">Tell us about your idea <ArrowUpRight size={17} /></Link></div><div className="values-list"><article><span>01</span><div><h3>Story first</h3><p>Start with the message and people behind the project.</p></div></article><article><span>02</span><div><h3>Attention to detail</h3><p>Give the visuals and the presentation the care they deserve.</p></div></article><article><span>03</span><div><h3>Clear collaboration</h3><p>Make expectations, next steps and communication straightforward.</p></div></article></div></div></section>
    <CTA />
  </>
}
