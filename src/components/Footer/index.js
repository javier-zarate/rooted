import React from 'react';
import { FooterWrapper } from './styles';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa';

export function Footer() {
  return (
    <FooterWrapper>
      <div>
        <a href="https://www.instagram.com/rooted_fambam/">
          <FaInstagram />
        </a>
        <a>
          <FaRegEnvelope />
        </a>
      </div>
      <div>
        <a>Privacy policy</a>
        <a>Terms of service</a>
        <a>Refund Policy</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/javierzarate17/">
        &copy; Developed by Javier Zarate
        </a>
      </div>
    </FooterWrapper>
  );
}
