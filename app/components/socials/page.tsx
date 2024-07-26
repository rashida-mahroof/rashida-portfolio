import React from 'react'

import { faLinkedin, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Socials() {
    return <div className="flex space-x-4">
      <a href="https://github.com/rashida-mahroof" target='_blank' className="text-2xl  text-gray-400 hover:text-yellow-400">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/rashida-mahroof-b40b52169/" target='_blank' className="text-2xl  text-gray-400 hover:text-yellow-400">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.facebook.com/rashida.mahroof.3/" className="text-2xl  text-gray-400 hover:text-yellow-400">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/rashida_mahroof/" target='_blank' className="text-2xl  text-gray-400 hover:text-yellow-400">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>;
  }

export default Socials;