'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="content-shell contact-shell">
        <div className="contact-header reveal">
          <p className="micro-label">Get In Touch</p>
          <h2 className="section-title">Feedback, questions, or just say&nbsp;hi.</h2>
          <p className="section-copy">
            Have an idea, found a bug, or want to collaborate? Send a message
            and it goes straight to my inbox.
          </p>
        </div>

        <div className="contact-grid">
          <form onSubmit={handleSubmit} className="contact-form reveal">
            {/* Replace YOUR_ACCESS_KEY with your Web3Forms access key */}
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
            <input type="hidden" name="subject" value="MemBlock Website Contact" />

            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="form-input"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message..."
              required
              rows={5}
              className="form-input form-textarea"
            />

            <button
              type="submit"
              className="outline-pill contact-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'SENDING...' : status === 'sent' ? 'SENT!' : 'SEND MESSAGE'}
            </button>

            {status === 'error' && (
              <p className="form-error">Something went wrong. Please try again.</p>
            )}
          </form>

          <div className="contact-links reveal">
            <p className="contact-links-title">Connect</p>

            <a
              href="https://github.com/iexcalibur/memblock-website"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-kumar-7b92101ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="https://pypi.org/project/memblock/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.986 7.647 4.986l.003 2.054h4.39v.618H5.57S3 7.28 3 11.79c0 4.508 2.244 4.346 2.244 4.346h1.34v-2.09s-.072-2.244 2.209-2.344l4.262-.012s2.139.034 2.139-2.07V5.594s.325-2.594-4.108-2.594c-4.434 0-4.24 2.422-4.24 2.422l.002 2.078h4.32v.618H5.57" />
                <circle cx="7.635" cy="4.912" r=".63" />
                <path d="M14.415 12.308h-4.328s-2.432-.039-2.432 2.35v3.951S7.286 21 12.064 21c4.574 0 4.289-1.986 4.289-1.986l-.003-2.054h-4.39v-.618h6.47S21 16.72 21 12.21c0-4.508-2.244-4.346-2.244-4.346h-1.34v2.09s.072 2.244-2.209 2.344" />
                <circle cx="16.365" cy="19.088" r=".63" />
              </svg>
              <span>PyPI</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
