import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import {
  scrollToSection,
  handleLinkClick,
} from '../../../../utils/scrollUtils';

import './FooterNav.scss';

const FooterNav = () => {
  const language = useSelector((state) => state.global.language);
  const navigate = useNavigate();
  const location = useLocation();
  const [targetSection, setTargetSection] = useState('');

  // This effect is called when the location changes
  useEffect(() => {
    if (location.pathname === '/' && targetSection) {
      scrollToSection(targetSection);
      setTargetSection('');
    }
  }, [location.pathname, targetSection]);

  return (
    <nav className="FooterNav">
      <h4 className="FooterNav-title">
        {language === 'fr' ? 'Navigation' : 'Navigation'}
      </h4>
      <ul className="FooterNav-list">
        <li className="FooterNav-list-item">
          <Link
            className="FooterNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('identity', location, navigate, setTargetSection);
            }}
          >
            {language === 'fr' ? 'Identité' : 'Identität'}
          </Link>
        </li>
        <li className="FooterNav-list-item">
          <Link
            className="FooterNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('media', location, navigate, setTargetSection);
            }}
          >
            {language === 'fr' ? 'Médias' : 'Medien'}
          </Link>
        </li>
        <li className="FooterNav-list-item">
          <Link
            className="FooterNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('dates', location, navigate, setTargetSection);
            }}
          >
            {language === 'fr' ? 'Concerts' : 'Konzerte'}
          </Link>
        </li>
        <li className="FooterNav-list-item">
          <Link
            className="FooterNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact', location, navigate, setTargetSection);
            }}
          >
            {language === 'fr' ? 'Contact' : 'Kontakt'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
