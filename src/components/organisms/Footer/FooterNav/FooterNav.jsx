import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import './FooterNav.scss';

const FooterNav = () => {
  const language = useSelector((state) => state.global.language);
  const navigate = useNavigate();
  const location = useLocation();
  const [targetSection, setTargetSection] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 64; // 64px is the height of the fixed header

    // element.getBoundingClientRect().top => distance from the top of the element to the top of the viewport
    // window.scrollY => distance from the top of the document to the top of the viewport
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  // This function is called when a link is clicked
  const handleLinkClick = (id) => {
    if (location.pathname !== '/') {
      setTargetSection(id);
      navigate('/');
    } else {
      scrollToSection(id);
    }
  };

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
              handleLinkClick('identity');
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
              handleLinkClick('media');
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
              handleLinkClick('dates');
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
              handleLinkClick('contact');
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
