import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handler for input field changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID,form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // console.log(form.current)
          setLoading(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
        },
        (error) => {
          console.log('FAILED...', error);
          setLoading(false);
        },
      );
  };


  

  //   event.preventDefault();
  //   setLoading(true);
  //   const formData = new FormData(event.target);

    
  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);
  //   console.log(json)
    
  //   // formData.append('access_key', '6d7bc3fc-6190-43c5-8298-89ac5ef7494f');
  //   // const res = await fetch('https://api.web3forms.com/submit', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //     Accept: 'application/json',
  //   //   },
  //   //   body: json,
  //   // }).then(res => res.json());

  //   // if (res.success) {
  //   //   setFormData({ name: '', email: '', subject: '', message: '' });
  //   //   setLoading(false);
  //   // }
  // };
  return (
    <form id="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="row gx-3 gy-4">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              name="name"
              placeholder="Name *"
              className="form-control"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Your Email</label>
            <input
              name="email"
              placeholder="Email *"
              className="form-control"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              name="subject"
              placeholder="Subject *"
              className="form-control"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Your message</label>
            <textarea
              name="message"
              placeholder="Your message *"
              rows={4}
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="send">
            <button
              className={`px-btn w-100 ${loading ? 'disabled' : ''}`}
              type="submit"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
