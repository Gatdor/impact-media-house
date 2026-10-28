
import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { services } from '../data/site.js'

const FACEBOOK_URL =
  'https://www.facebook.com/people/Impact-Media-House-360/61591345677628/'

const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  timeframe: '',
  description: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({
    type: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const update = (event) => {
    const { name, value } = event.target

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }))
  }

  async function submit(event) {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    if (!endpoint) {
      setStatus({
        type: 'error',
        message:
          'The enquiry form is not connected yet. Configure VITE_FORMSPREE_ENDPOINT before accepting enquiries.',
      })
      return
    }

    setLoading(true)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _subject: `Impact Media House enquiry — ${form.name}`,
        }),
      })

      if (!response.ok) {
        throw new Error('The form provider rejected the submission.')
      }

      setStatus({
        type: 'success',
        message:
          'Thank you. Your enquiry has been submitted successfully.',
      })

      setForm(initialForm)
    } catch {
      setStatus({
        type: 'error',
        message:
          'We could not submit your enquiry. Please try again later or contact the business through its official Facebook page.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <i /> CONTACT
          </span>

          <h1>
            Have a story
            <br />
            in <em>mind?</em>
          </h1>

          <p>
            Tell us a little about what you are planning. Start with the
            essentials and we can take it from there.
          </p>
        </div>
      </section>

      <section className="section-pad contact-section">
        <div className="container contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">
              <i /> LET&apos;S TALK
            </span>

            <h2>
              Good projects begin
              <br />
              with a <em>conversation.</em>
            </h2>

            <p>
              Share the goal, timing and type of creative support you are
              looking for. The team can follow up once the enquiry channel
              has been configured.
            </p>

            <div className="contact-method">
              <span className="facebook-icon" aria-hidden="true">
                f
              </span>

              <div>
                <strong>Facebook</strong>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the official page <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <div className="contact-method contact-method--muted">
              <span>
                <Mail size={19} />
              </span>

              <div>
                <strong>Email</strong>
                <p>Email address not supplied yet.</p>
              </div>
            </div>

            <div className="contact-method contact-method--muted">
              <span>
                <Phone size={19} />
              </span>

              <div>
                <strong>Phone / WhatsApp</strong>
                <p>Contact number not supplied yet.</p>
              </div>
            </div>

            <div className="contact-method contact-method--muted">
              <span>
                <MapPin size={19} />
              </span>

              <div>
                <strong>Location</strong>
                <p>Kakuma, Kenya — exact address not supplied.</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-heading">
              <span>PROJECT ENQUIRY</span>
              <h3>Tell us about it.</h3>
              <p>Fields marked * are required.</p>
            </div>

            <label>
              Full name *
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                value={form.name}
                onChange={update}
                placeholder="Your name"
              />
            </label>

            <div className="form-row">
              <label>
                Phone number *
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={40}
                  value={form.phone}
                  onChange={update}
                  placeholder="Your phone number"
                />
              </label>

              <label>
                Email (optional)
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label>
              Service you are interested in *
              <select
                name="service"
                required
                value={form.service}
                onChange={update}
              >
                <option value="">Choose a service</option>

                {services.map((service) => (
                  <option
                    key={service.title}
                    value={service.title}
                  >
                    {service.title}
                  </option>
                ))}

                <option value="Other / not sure">
                  Other / not sure
                </option>
              </select>
            </label>

            <label>
              Preferred timeframe
              <input
                name="timeframe"
                maxLength={120}
                value={form.timeframe}
                onChange={update}
                placeholder="e.g. next month (optional)"
              />
            </label>

            <label>
              Project description *
              <textarea
                name="description"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                value={form.description}
                onChange={update}
                placeholder="What would you like to create? Include any helpful context."
              />
            </label>

            <p className="form-privacy">
              Please avoid sharing sensitive personal information. Your
              details should be used only to respond to this enquiry,
              in line with the business&apos;s privacy notice.
            </p>

            {status.message && (
              <p
                className={`form-status form-status--${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}

            <button
              className="button button--red button--full"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Submitting…' : 'Send project enquiry'}
              <ArrowUpRight size={17} />
            </button>

            {!endpoint && (
              <p className="form-setup-note">
                Setup required: this form will not transmit information
                until a Formspree endpoint is configured.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
