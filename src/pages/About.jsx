import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA.jsx'

export default function About() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow"><i /> ABOUT IMPACT MEDIA HOUSE</span><h1>Creative work.<br /><em>Human stories.</em></h1><p>A digital home for a creative media brand rooted in Kakuma, Kenya.</p></div></section>
    <section className="section-pad"><div className="container about-layout"><div className="about-visual"><img src="/images/portfolio-placeholder.svg" alt="Placeholder for a genuine Impact Media House team or behind-the-scenes photograph" /><span className="image-caption">REPLACE WITH AN APPROVED REAL IMAGE</span></div><div className="about-copy"><span className="eyebrow"><i /> WHO WE ARE</span><h2>Make the story<br />clear. Make it <em>matter.</em></h2><p>Impact Media House is presented here as a creative media business based in Kakuma. This website provides a professional platform to introduce the brand, explain confirmed services and showcase work as the company supplies approved material.</p><p>Our proposed approach is simple: understand the purpose, respect the people and context behind each story, and present the final work with care.</p><div className="draft-copy-note"><strong>Brand review required</strong><p>The description above is draft copy for review, not a claim about an officially adopted mission, vision or company history.</p></div><Link className="text-link text-link--large" to="/contact">Start a conversation <ArrowUpRight size={17} /></Link></div></div></section>
    <section className="values-band"><div className="container values-band-grid"><div><span className="eyebrow"><i /> WORKING PRINCIPLES</span><h2>Creative, considered<br />and <em>collaborative.</em></h2></div><div className="principle"><span>01 / LISTEN</span><h3>Understand the purpose</h3><p>Begin by learning what the project needs to communicate and who it is for.</p></div><div className="principle"><span>02 / CREATE</span><h3>Build with intention</h3><p>Choose a format and visual direction that fit the story and audience.</p></div><div className="principle"><span>03 / DELIVER</span><h3>Keep it clear</h3><p>Agree on scope, timelines and deliverables before work begins.</p></div></div></section>
    <CTA />
  </>
}
