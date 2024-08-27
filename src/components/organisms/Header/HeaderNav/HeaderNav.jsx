import { Link, NavLink } from 'react-router-dom';

import './HeaderNav.scss';

const HeaderNav = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
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
