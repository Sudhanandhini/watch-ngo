import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <footer>
      {/* Main footer - teal */}
      <div className="bg-[#1a7fa0] text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider mb-4">CONTACT US</h3>
            <div>
              <p className="font-bold text-md mb-2">Head Office</p>
              <p className="text-md leading-relaxed text-gray-100">
                No: 1-52, B.C. Colony,<br />
                Bangarupalayam,<br />
                Chittoor District - 517 416<br />
                Andhra Pradesh, India<br />
                Mobile: +91 94402 77631<br />
                E-mail: watch_india2003@yahoo.co.in<br />
                watchindiajc@gmail.com<br />
                Website: www.watchngo.org
              </p>
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider mb-4">ENQUIRY</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label className="text-xs text-gray-200 block mb-1">Your Name (required)</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-2 py-1.5 text-md text-gray-800 bg-white border-0 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-200 block mb-1">Your Email (required)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-2 py-1.5 text-md text-gray-800 bg-white border-0 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-200 block mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-2 py-1.5 text-md text-gray-800 bg-white border-0 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-200 block mb-1">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-2 py-1.5 text-md text-gray-800 bg-white border-0 outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 text-md font-semibold uppercase tracking-wider transition-colors"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {[
                { label: 'Vision-Mission', path: '/about' },
                { label: 'Child Protection & Child Rights', path: '/program' },
                { label: 'Gallery', path: '/resources' },
                { label: 'President Desk', path: '/about' },
                { label: 'Karunya Childrens Home', path: '/what-we-do' },
              ].map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <Link to={link.path} className="text-md text-gray-100 hover:text-orange-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider mb-4">LOCATION MAP</h3>
            <div className="w-full h-48 bg-gray-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.5!2d79.3!3d13.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI0JzAwLjAiTiA3OcKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="WATCH Location"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Bangarupalayam,Chittoor,AndhraPradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-orange-300 hover:text-orange-200 mt-1 inline-block"
            >
              Open in Maps ↗
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-primary text-white text-center py-3">
        <p className="text-md">Watch | Powered By Sunsys Technologies</p>
      </div>
    </footer>
  );
}
