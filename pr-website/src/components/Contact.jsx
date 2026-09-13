import { useState } from 'react';
import '../styles/Sections2.css';

const contactDetails = [
  { icon: '📍', label: 'Our Office', value: '123 Madison Avenue, New York, NY 10016' },
  { icon: '📞', label: 'Phone', value: '+1 (212) 555-0190' },
  { icon: '✉️', label: 'Email', value: 'hello@prestigepr.com' },
  { icon: '🕐', label: 'Business Hours', value: 'Mon – Fri: 9:00 AM – 6:00 PM EST' },
];

const services = [
  'Media Relations',
  'Corporate Communications',
  'Crisis Management',
  'Digital PR',
  'Event & Launch PR',
  'Personal Branding',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-bg"></div>
      <div className="container">
        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <div className="section-label">Contact Us</div>
            <h2 className="section-title">
              Let's Build Something <em>Remarkable</em>
            </h2>
            <div className="gold-divider"></div>
            <p className="section-subtitle">
              Ready to elevate your brand's story? Reach out to us — our team of
              PR experts is ready to craft your winning strategy.
            </p>

            <div className="contact-details">
              {contactDetails.map((detail) => (
                <div className="contact-detail-item" key={detail.label}>
                  <div className="contact-detail-icon">{detail.icon}</div>
                  <div className="contact-detail-text">
                    <span className="contact-detail-label">{detail.label}</span>
                    <span className="contact-detail-value">{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">🎉</div>
                <h3 className="form-success-title">Message Received!</h3>
                <p className="form-success-text">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours. We look forward to working with you!
                </p>
              </div>
            ) : (
              <>
                <h3 className="contact-form-title">Send Us a Message</h3>
                <p className="contact-form-subtitle">
                  Fill in the form and we'll be in touch within 24 hours.
                </p>

                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-first-name">First Name *</label>
                      <input
                        id="contact-first-name"
                        type="text"
                        name="firstName"
                        className="form-input"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-last-name">Last Name *</label>
                      <input
                        id="contact-last-name"
                        type="text"
                        name="lastName"
                        className="form-input"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-company">Company</label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        className="form-input"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-service">Service Needed</label>
                      <select
                        id="contact-service"
                        name="service"
                        className="form-select"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a Service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-budget">Budget Range</label>
                      <select
                        id="contact-budget"
                        name="budget"
                        className="form-select"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select Budget</option>
                        <option>$5,000 – $10,000/mo</option>
                        <option>$10,000 – $25,000/mo</option>
                        <option>$25,000 – $50,000/mo</option>
                        <option>$50,000+/mo</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Tell Us About Your Goals *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-textarea"
                      placeholder="Describe your PR goals, challenges, or any specific requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary contact-form-submit"
                    disabled={loading}
                    id="contact-submit-btn"
                  >
                    {loading ? (
                      <>
                        <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
