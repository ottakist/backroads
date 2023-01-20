import React from 'react';
import { pageLinks, socialLinks } from '../data';

import SocialLink from './SocialLink';
const Footer = () => {
  return (
    <footer class='section footer'>
      <ul class='footer-links'>
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className='footer-link'>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul class='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink {...link} key={link.id} itemClass='footer-icon' />;
        })}
      </ul>
      <p class='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
