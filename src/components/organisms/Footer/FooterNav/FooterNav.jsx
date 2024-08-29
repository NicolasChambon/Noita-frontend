import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './FooterNav.scss';

const FooterNav = () => {
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

  const language = useSelector((state) => state.global.language);

  return (
    <nav className="FooterNav">
      <h4 className="FooterNav-title">
        {language === 'fr' ? 'Navigation' : 'Navigation'}
      </h4>
      <ul className="FooterNav-list">
        <li className="FooterNav-list-item">
          <Link
            className="FooterNav-list-item-link"
            onClick={() => scrollToSection('identity')}
          >
            {language === 'fr' ? 'Identité' : 'Identität'}
          </Link>
        </li>
        <li className="FooterNav-list-item">
          <Link
            className="FooterNav-list-item-link"
            onClick={() => scrollToSection('media')}
          >
            {language === 'fr' ? 'Médias' : 'Medien'}
          </Link>
        </li>
        <li className="FooterNav-list-item">
          <Link
            className="FooterNav-list-item-link"
            onClick={() => scrollToSection('dates')}
          >
            {language === 'fr' ? 'Concerts' : 'Konzerte'}
          </Link>
        </li>
        <li className="FooterNav-list-item">
          <Link
            className="FooterNav-list-item-link"
            onClick={() => scrollToSection('contact')}
          >
            {language === 'fr' ? 'Contact' : 'Kontakt'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
