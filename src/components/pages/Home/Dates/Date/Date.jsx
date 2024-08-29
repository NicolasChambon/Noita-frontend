import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Date.scss';

const Date = ({ date, place, city, event }) => {
  return (
    <li className="Date">
      <Link
        className="Date-link first"
        to="https://www.galotti.ch/story/freitag-6-9-24-bandnacht/"
        target="_blank"
      >
        <div className="Date-link-date">{date}</div>
        <div className="Date-link-location">
          <div className="Date-link-location-place">{place}</div>
          <div className="Date-link-location-city">{city}</div>
        </div>
        <div className="Dates-list-item-link-location-event">{event}</div>
      </Link>
    </li>
  );
};

Date.propTypes = {
  date: PropTypes.string,
  place: PropTypes.string,
  city: PropTypes.string,
  event: PropTypes.string,
};

export default Date;
