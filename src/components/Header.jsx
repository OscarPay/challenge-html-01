import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__right">
            <Logo />

            <nav className="header__nav">
              <ul>
                <li>Technology</li>
                <li>Ideas</li>
                <li>Leadership</li>
                <li>Video</li>
                <li>News</li>
                <li>Finance</li>
                <li>Entertainment</li>
              </ul>
            </nav>
          </div>

          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
};

export default Header;
