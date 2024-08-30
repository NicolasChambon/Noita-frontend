import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Date.scss';

const Date = ({ date, place, city, event, link }) => {
  return (
    <li className="Date">
      <Link
        className="Date-link first"
        to={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="Date-link-info">
          <div className="Date-link-info-date">{date}</div>
          <div className="Date-link-info-place">{place}</div>
          <div className="Dates-link-info-event">{event}</div>
        </div>
        <div className="Date-link-city">{city}</div>
      </Link>
    </li>
  );
};

Date.propTypes = {
  date: PropTypes.string.isRequired,
  place: PropTypes.string,
  city: PropTypes.string.isRequired,
  event: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default Date;
