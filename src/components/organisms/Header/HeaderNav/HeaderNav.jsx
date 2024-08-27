import { Link, NavLink } from 'react-router-dom';

import './HeaderNav.scss';

const HeaderNav = () => {
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

  return (
    <nav className="HeaderNav">
      <ul className="HeaderNav-list">
        <li className="HeaderNav-list-item">
          <Link
            className="HeaderNav-list-item-link"
            to="#"
            onClick={() => scrollToSection('identity')}
          >
            Identité
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <Link
            className="HeaderNav-list-item-link"
            to="#"
            onClick={() => scrollToSection('media')}
          >
            Médias
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <Link
            className="HeaderNav-list-item-link"
            to="#"
            onClick={() => scrollToSection('dates')}
          >
            Concerts
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <Link
            className="HeaderNav-list-item-link"
            to="#"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <NavLink className="HeaderNav-list-item-link" to="/news">
            Actualités
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
