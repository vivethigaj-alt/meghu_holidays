import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Message:", formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 4000);
    };

    return (
        <div className="contact-page animate-fade-in">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We are here to help you 24/7</p>
                </div>
            </div>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">

                        <div className="contact-info-panel">
                            <h2>Get in Touch</h2>
                            <p>Have questions about our fleet, services, or want to make a special booking request? Reach out to us directly!</p>

                            <div className="info-cards">
                                <div className="info-card">
                                    <div className="info-icon"><Phone size={24} /></div>
                                    <div className="info-content">
                                        <h4>Phone Number</h4>
                                        <p>+91 95666 11212</p>
                                        <p>+91 99949 36035</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon"><Mail size={24} /></div>
                                    <div className="info-content">
                                        <h4>Email Address</h4>
                                        <p>meghuholidays@gmail.com</p>

                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon"><MapPin size={24} /></div>
                                    <div className="info-content">
                                        <h4>Office Location</h4>
                                        <p>1/700 , SMR Nager , Kunnathur , Coimbatore-641107</p>
                                    </div>
                                </div>
                            </div>

                            <div className="whatsapp-box">
                                <h4>Prefer WhatsApp?</h4>
                                <p>Chat with us instantly for quick bookings or queries.</p>
                                <a href="https://wa.me/9994936035" target="_blank" rel="noreferrer" className="btn btn-accent">
                                    <MessageCircle size={20} /> Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="contact-form-panel">
                            <h2>Send a Message</h2>
                            {submitted ? (
                                <div className="contact-success">
                                    <Send size={48} color="#00b4d8" />
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for contacting us. Our team will get back to you as soon as possible.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label className="form-label">Your Name</label>
                                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Subject</label>
                                        <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Message</label>
                                        <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary submit-msg-btn">Send Message</button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="map-section">
                <div className="map-placeholder">
                    <div className="map-overlay">
                        <h3>Our Location</h3>
                        <p>1/700 , SMR Nager , Kunnathur , Coimbatore-641107</p>
                    </div>
                    <img src="https://maps.app.goo.gl/uVBT6PmZmSpS51Br6" alt="Map representing office location" className="map-img" />
                </div>
            </section>
        </div>
    );
};

export default Contact;
