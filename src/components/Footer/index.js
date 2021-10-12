import React from 'react';
import { FooterWrapper } from './styles';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'gatsby';

export function Footer() {
  return (
    <FooterWrapper>
      <div>
        <a
          href="https://www.instagram.com/rooted_fambam/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a href='mailto: javierzarate0614@gmail.com'>
          <FaRegEnvelope />
        </a>
      </div>
      <div>
        <Link to="/privacy-policy">Privacy policy</Link>
        <Link to="/terms-of-service">Terms of service</Link>
        <Link to="/refund-policy">Refund Policy</Link>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/javierzarate17/"
          target="_blank"
          rel="noreferrer"
        >
          &copy; Developed by Javier Zarate
        </a>
      </div>
    </FooterWrapper>
  );
}
