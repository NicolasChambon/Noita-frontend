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
  date: PropTypes.string,
  place: PropTypes.string,
  city: PropTypes.string,
  event: PropTypes.string,
};

export default Date;
