import React, { useState } from 'react';
import { Mail, Phone, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Linkedin, Github } from './BrandIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear validation error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API or Email service (e.g. EmailJS, Formspree, custom backend)
    setTimeout(() => {
      /* 
         TO CONNECT EMAIL SERVICE LATER:
         You can install and use @emailjs/browser or send a fetch POST request here:
         
         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
           .then((result) => {
               console.log(result.text);
           }, (error) => {
               console.log(error.text);
           });
      */
      console.log('Submitted Contact Form Data:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
        </div>

        <div className="contact-grid">
          
          {/* Left Side: Contact Cards Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's discuss something great</h3>
            <p className="contact-info-desc">
              Interested in working together, discussing a project, or exploring opportunities? 
              Feel free to get in touch.
            </p>

            <div className="contact-cards">
              {/* Email Card */}
              <div className="glass-card contact-item-card">
                <div className="contact-icon-box cyan-glow">
                  <Mail size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label-text">Email</span>
                  <a href="mailto:nandakishordasari81@gmail.com" className="contact-value-link">
                    nandakishordasari81@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card contact-item-card">
                <div className="contact-icon-box blue-glow">
                  <Phone size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label-text">Phone</span>
                  <a href="tel:+918008940874" className="contact-value-link">
                    +91-8008940874
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="glass-card contact-item-card">
                <div className="contact-icon-box cyan-glow">
                  <Linkedin size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label-text">LinkedIn</span>
                  <a 
                    href="https://www.linkedin.com/in/dasari-nanda-kishor-2ab9a2377" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-value-link"
                  >
                    dasari-nanda-kishor-2ab9a2377
                  </a>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="glass-card contact-item-card">
                <div className="contact-icon-box blue-glow">
                  <Github size={20} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label-text">GitHub</span>
                  <a 
                    href="https://github.com/nandakishordasari-byte" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-value-link"
                  >
                    nandakishordasari-byte
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Block */}
          <div className="glass-card contact-form-card">
            <h3 className="form-card-title">Send A Message</h3>
            
            <form onSubmit={handleSubmit} noValidate>
              
              {/* Name field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`form-control ${errors.name ? 'form-control-error' : ''}`}
                />
                {errors.name && (
                  <span className="error-text">
                    <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className={`form-control ${errors.email ? 'form-control-error' : ''}`}
                />
                {errors.email && (
                  <span className="error-text">
                    <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Subject field */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can I help you?"
                  className={`form-control ${errors.subject ? 'form-control-error' : ''}`}
                />
                {errors.subject && (
                  <span className="error-text">
                    <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message details here..."
                  rows="5"
                  className={`form-control ${errors.message ? 'form-control-error' : ''}`}
                ></textarea>
                {errors.message && (
                  <span className="error-text">
                    <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn btn-primary form-submit-btn"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>

              {/* Success Notification Alert */}
              {submitStatus === 'success' && (
                <div className="form-feedback-alert success-alert">
                  <CheckCircle2 size={16} />
                  <span>Message sent successfully! I will get back to you shortly.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
