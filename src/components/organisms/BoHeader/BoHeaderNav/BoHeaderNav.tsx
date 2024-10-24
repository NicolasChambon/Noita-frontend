import { NavLink } from 'react-router-dom';

import './BoHeaderNav.scss';

const BoHeaderNav = () => {
  return (
    <nav className="BoHeaderNav">
      <ul className="BoHeaderNav-list">
        <li className="BoHeaderNav-list-item">
          <NavLink className="BoHeaderNav-list-item-link" to="/admin/carousel">
            Carousel
          </NavLink>
        </li>
        <li className="BoHeaderNav-list-item">
          <NavLink className="BoHeaderNav-list-item-link" to="/admin/concerts">
            Concerts
          </NavLink>
        </li>
        <li className="BoHeaderNav-list-item">
          <NavLink className="BoHeaderNav-list-item-link" to="/admin/news">
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BoHeaderNav;
