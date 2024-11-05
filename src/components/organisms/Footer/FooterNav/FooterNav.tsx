// Dependencies
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Utils
import { handleLinkClick } from '../../../../utils/scrollUtils';

// Types
import { RootState } from '../../../../reducers/indexReducer';

// Styles
import './FooterNav.scss';

const FooterNav = () => {
  const language = useSelector((state: RootState) => state.global.language);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="FooterNav">
      <h4 className="FooterNav-title">
        {language === 'fr' ? 'Navigation' : 'Navigation'}
      </h4>
      <ul className="FooterNav-list">
        <li className="FooterNav-list-item">
          <Link
            to="/"
            className="FooterNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('identity', location, navigate);
            }}
          >
            {language === 'fr' ? 'Présentation' : 'Über uns'}
          </Link>
        </li>
        <li className="FooterNav-list-item">
          <Link
            to="/"
            className="FooterNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('media', location, navigate);
            }}
          >
            {language === 'fr' ? 'Médias' : 'Medien'}
          </Link>
        </li>
        <li className="FooterNav-list-item">
          <Link
            to="/"
            className="FooterNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('dates', location, navigate);
            }}
          >
            {language === 'fr' ? 'Concerts' : 'Konzerte'}
          </Link>
        </li>
        <li className="FooterNav-list-item">
          <Link
            to="/"
            className="FooterNav-list-item-link"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact', location, navigate);
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
