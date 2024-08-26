import { Link, NavLink } from 'react-router-dom';

import './MenuNav.scss';

const MenuNav = () => {
  return (
    <nav className="MenuNav">
      <ul className="MenuNav-list">
        <li className="MenuNav-list-item">
          <Link className="MenuNav-list-item-link" to="#identity">
            Identité
          </Link>
        </li>
        <li className="MenuNav-list-item">
          <Link className="MenuNav-list-item-link" to="#dates">
            Concerts
          </Link>
        </li>
        <li className="MenuNav-list-item">
          <Link className="MenuNav-list-item-link" to="#contact">
            Contact
          </Link>
        </li>
        <li className="MenuNav-list-item">
          <NavLink className="MenuNav-list-item-link" to="/news">
            Actualités
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
