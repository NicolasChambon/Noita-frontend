import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import {
  scrollIfOnSamePage,
  scrollToSection,
  handleLinkClick,
} from '../../../../../utils/scrollUtils';

import './MenuNav.scss';

const MenuNav = () => {
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
    <nav className="MenuNav">
      <ul className="MenuNav-list">
        <li className="MenuNav-list-item">
          <Link
            className="MenuNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('identity', location, navigate, setTargetSection);
            }}
          >
            {language === 'fr' ? 'Présentation' : 'Über uns'}
          </Link>
        </li>
        <li className="MenuNav-list-item">
          <Link
            className="MenuNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('media', location, navigate, setTargetSection);
            }}
          >
            {language === 'fr' ? 'Médias' : 'Medien'}
          </Link>
        </li>
        <li className="MenuNav-list-item">
          <Link
            className="MenuNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('dates', location, navigate, setTargetSection);
            }}
          >
            {language === 'fr' ? 'Concerts' : 'Konzerte'}
          </Link>
        </li>
        <li className="MenuNav-list-item">
          <Link
            className="MenuNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact', location, navigate, setTargetSection);
            }}
          >
            {language === 'fr' ? 'Contact' : 'Kontakt'}
          </Link>
        </li>
        <li className="MenuNav-list-item">
          <NavLink
            className="MenuNav-list-item-link"
            to="/news"
            onClick={() => {
              scrollIfOnSamePage('/news');
            }}
          >
            {language === 'fr' ? 'Actualités' : 'News'}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
