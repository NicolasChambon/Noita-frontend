import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  scrollIfOnSamePage,
  handleLinkClick,
} from '../../../../../utils/scrollUtils';

import './MenuNav.scss';

const MenuNav = () => {
  const language = useSelector((state) => state.global.language);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="MenuNav">
      <ul className="MenuNav-list">
        <li className="MenuNav-list-item">
          <Link
            className="MenuNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('identity', location, navigate);
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
              handleLinkClick('media', location, navigate);
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
              handleLinkClick('dates', location, navigate);
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
              handleLinkClick('contact', location, navigate);
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
