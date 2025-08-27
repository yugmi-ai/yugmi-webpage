import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_i8ql1r2',        // Replace with your EmailJS service ID
      'template_lni995i',       // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        reply_to: formData.email,
        company: formData.organization,
        message: formData.message,
      },
      'TIGthDp3ink4ImDAE'         // Replace with your EmailJS public key
    ).then(
      () => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', organization: '', message: '' });
      },
      (error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in{' '}
              <span className="text-gray-300">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Ready to revolutionize your infrastructure with digital twins?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Organization</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                    placeholder="Your company or organization"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project and how we can help..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & CTAs */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <strong className="text-white">Email:</strong><br />
                    sales@yugmi.com
                  </div>
                  {/* <div>
                    <strong className="text-white">Phone:</strong><br />
                    +91-9220320044
                  </div> */}
                  <div>
                    <strong className="text-white">Headquarters:</strong><br />
                    Noida, UP, India
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                  Request Consultation
                </button>
                <button className="w-full border border-gray-400 text-gray-300 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all">
                  Become a Partner
                </button>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
                <h4 className="text-lg font-semibold text-white mb-2">Ready for a Demo?</h4>
                <p className="text-gray-300 mb-4">
                  See Yugmi's digital twin technology in action
                </p>
                {/* <button className="bg-gradient-to-r from-[#6F2B7F] via-[#C93A60] to-[#E55C3B] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
                  Schedule Live Demo
                </button> */}
                <a
                  href="https://calendly.com/yugmi-ai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Schedule Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;