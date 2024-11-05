// Dependencies
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Utils
import {
  scrollIfOnSamePage,
  handleLinkClick,
} from '../../../../utils/scrollUtils';

// Types
import { RootState } from '../../../../reducers/indexReducer';

// Styles
import './HeaderNav.scss';

const HeaderNav = () => {
  const language = useSelector((state: RootState) => state.global.language);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="HeaderNav">
      <ul className="HeaderNav-list">
        <li className="HeaderNav-list-item">
          <Link
            to="/"
            className="HeaderNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('identity', location, navigate);
            }}
          >
            {language === 'fr' ? 'Présentation' : 'Über uns'}
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <Link
            to="/"
            className="HeaderNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('media', location, navigate);
            }}
          >
            {language === 'fr' ? 'Médias' : 'Medien'}
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <Link
            to="/"
            className="HeaderNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('dates', location, navigate);
            }}
          >
            {language === 'fr' ? 'Concerts' : 'Konzerte'}
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <Link
            to="/"
            className="HeaderNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact', location, navigate);
            }}
          >
            {language === 'fr' ? 'Contact' : 'Kontakt'}
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <NavLink
            className="HeaderNav-list-item-link"
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

export default HeaderNav;
