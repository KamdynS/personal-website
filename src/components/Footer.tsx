import React from 'react';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 flex justify-center items-center space-x-6">
        <a href="kamdynshaefferbusiness@gmail.com" className="text-gray-300 hover:text-blue-400">
          <FaEnvelope size={24} />
        </a>
        <a href="https://twitter.com/kamdynshaeffer" className="text-gray-300 hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://github.com/kamdyns" className="text-gray-300 hover:text-blue-400">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/kshaeffer1844/" className="text-gray-300 hover:text-blue-400">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;