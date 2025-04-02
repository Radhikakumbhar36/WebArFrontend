// SeventhSection.jsx
import React, { useState } from 'react';
import './SeventhSection.css';
import ContactIllustration from '../assets/contract.png'; // Update path to your image

const SeventhSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    businessName: '',
    subject: '',
    message: ''
  });
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <section className="seventh-section">
      <div className="seventh-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Create Your AR Experience</h2>
            <p>
              Ready to elevate your business with AR? Let's collaborate to 
              bring your vision to life! Fill out the form below or reach out to us 
              today—we'd love to hear from you.
            </p>
            <div className="illustration-container">
              <img 
                src={ContactIllustration} 
                alt="Contact illustration" 
                className="contact-illustration" 
              />
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Contact US</h3>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                />
                <span className="input-icon">👤</span>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message ..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-submit">
                <button type="submit" className="submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;