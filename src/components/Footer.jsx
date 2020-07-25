import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faPinterestP,
  faTwitter,
  faFacebookF,
} from '@fortawesome/fontawesome-free-brands';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid--footer">
          <div className="details">
            <Logo />
            <small>&copy; 2018 Deck</small>
            <br />
            <small>Component based UI Kit</small>
          </div>

          <div className="categories cat-1">
            <p>Technology</p>
            <p>Ideas</p>
          </div>

          <div className="categories cat-2">
            <p>Leadership</p>
            <p>Video</p>
          </div>

          <div className="categories cat-3">
            <p>News</p>
            <p>Finance</p>
          </div>

          <div className="categories cat-4">
            <p>Entertainment</p>
          </div>

          <div className="social">
            <div className="social__icons">
              <small>Follow us:</small>

              <FontAwesomeIcon icon={faInstagram} />

              <FontAwesomeIcon icon={faPinterestP} />

              <FontAwesomeIcon icon={faTwitter} />

              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="social__subscribe">
              <input type="text" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
