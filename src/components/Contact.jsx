import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { CoffeeMascot, BugMascot } from './CuteMascots';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [statusState, setStatusState] = useState('idle');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please write a message.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatusState('sending');

    setTimeout(() => {
      setStatusState('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="os-window-card">
          <div className="os-window-header">
            <div className="os-window-path">
              <span>C:\GIFTY\contact</span>
            </div>
            <div className="os-window-controls">
              <span className="os-close-btn">x</span>
            </div>
          </div>

          <div className="os-window-body">
            <div className="section-header text-center">
              <span className="section-eyebrow">
                <Sparkles size={14} className="inline mr-1.5" />
                Get In Touch
              </span>
              <h2 className="section-title">Let's build something.</h2>
              <p className="section-subtitle">
                Have an interesting idea, internship opportunity, collaboration, or just want to say hello?
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-info-card">
                <h3>Connect Directly</h3>
                <p>
                  I am open to frontend engineering roles, AI applications development, internships, research collaborations, and open-source projects.
                </p>

                <div className="contact-links-list">
                  <a 
                    href="mailto:giftysharon12@gmail.com" 
                    className="contact-link-item"
                    title="Send Email"
                  >
                    <div className="link-icon-box bg-purple-100 text-purple-600">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="link-label">Email</span>
                      <span className="link-value">giftysharon12@gmail.com</span>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/gifty-sharon-b1781b3ab/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link-item"
                    title="LinkedIn Profile"
                  >
                    <div className="link-icon-box bg-blue-100 text-blue-600">
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <span className="link-label">LinkedIn</span>
                      <span className="link-value">linkedin.com/in/gifty-sharon-b1781b3ab</span>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/giftysharon125" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link-item"
                    title="GitHub Profile"
                  >
                    <div className="link-icon-box bg-slate-100 text-slate-800">
                      <GithubIcon size={18} />
                    </div>
                    <div>
                      <span className="link-label">GitHub</span>
                      <span className="link-value">github.com/giftysharon125</span>
                    </div>
                  </a>
                </div>

                <div className="contact-mascot-row">
                  <CoffeeMascot size={36} />
                  <BugMascot />
                </div>
              </div>

              <div className="contact-form-card">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      rows="4"
                      placeholder="Tell me about your project, internship opportunity, or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={errors.message ? 'input-error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>

                  {statusState === 'success' && (
                    <div className="form-alert success-alert bounce-in">
                      <CheckCircle2 size={18} className="mr-2 inline" />
                      <span>Message sent successfully! ✨</span>
                    </div>
                  )}

                  {statusState === 'error' && (
                    <div className="form-alert error-alert bounce-in">
                      <AlertCircle size={18} className="mr-2 inline" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="submit-form-btn"
                    disabled={statusState === 'sending'}
                  >
                    {statusState === 'sending' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="ml-2 inline" />
                      </>
                    )}
                  </button>

                  <p className="form-note">
                    🔒 Form validated & ready for direct EmailJS / Formspree service endpoint credentials.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
