import { Link } from 'react-router-dom'

export default function Brand({ footer = false, onClick }) {
  return (
    <Link className={`brand ${footer ? 'brand--footer' : ''}`} to="/" aria-label="Impact Media House home" onClick={onClick}>
      <img
        className="brand__image"
        src="/images/impact-media-house-logo.png"
        alt="Impact Media House"
        onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'block' }}
      />
      <span className="brand__fallback" aria-hidden="true"><span>IMPACT</span><b>MEDIA HOUSE</b></span>
    </Link>
  )
}
