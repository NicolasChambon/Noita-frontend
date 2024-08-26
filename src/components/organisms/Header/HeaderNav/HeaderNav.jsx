import { Link, NavLink } from 'react-router-dom';

import NoitaLogo from '../../../../assets/logos/noita-logo.svg';

import './HeaderNav.scss';

const HeaderNav = () => {
  return (
    <nav className="HeaderNav">
      <ul className="HeaderNav-list">
        <li className="HeaderNav-list-item">
          <Link className="HeaderNav-list-item-link" to="#identity">
            Identité
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <Link className="HeaderNav-list-item-link" to="#dates">
            Concerts
          </Link>
        </li>
        <li className="HeaderNav-list-item">
          <Link className="HeaderNav-list-item-link" to="#contact">
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
