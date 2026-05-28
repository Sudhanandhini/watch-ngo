import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Address */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Head Office</h2>
          <div className="text-md text-gray-700 space-y-1 leading-relaxed">
            <p>No: 1-52, B.C. Colony, Bangarupalayam,</p>
            <p>Chittoor District - 517 416</p>
            <p>Andhra Pradesh, India</p>
            <p className="mt-2">Mobile: +91 94402 77631</p>
            <p>E-mail: info@watchngo.org</p>
            <p>Website: www.watchngo.org</p>
          </div>
        </div>

        {/* Map */}
        <div className="h-72 bg-gray-200 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15520.5!2d79.3!3d13.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI0JzAwLjAiTiA3OcKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="WATCH Location Map"
          />
        </div>
      </div>
    </div>
  );
}
