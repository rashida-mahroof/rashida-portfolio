"use client"
// components/Contact.tsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import MainTitle from '../title/page';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or email service
    console.log('Form data submitted:', formData);
  };

  return (
    <div className=" text-white min-h-screen p-10" id='contact'>
       <MainTitle title="GET IN TOUCH" subtitle="CONTACT" />
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">DON'T BE SHY!</h2>
          <p className="mb-4">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBuilding} className="mr-4 text-yellow-400" />
              <p>Dubai, UAE</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4 text-yellow-400" />
              <p>rashidamahroofp@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-4 text-yellow-400" />
              <p>+971543600230</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/rashida-mahroof" target='_blank' className="text-2xl text-gray-400 hover:text-yellow-400">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/rashida-mahroof-b40b52169/" target='_blank' className="text-2xl text-gray-400 hover:text-yellow-400">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.facebook.com/rashida.mahroof.3/" className="text-2xl text-gray-400 hover:text-yellow-400">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/rashida_mahroof/" target='_blank' className="text-2xl text-gray-400 hover:text-yellow-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="YOUR NAME"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="YOUR EMAIL"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="YOUR SUBJECT"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="YOUR MESSAGE"
            className="w-full h-32 px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

