// Dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles
import './ConcertDate.scss';

const ConcertDate = ({ date, place, city, event, link }) => {
  // Redux state
  const language = useSelector((state) => state.global.language);

  // Convert AAAA-MM-DD to DD Mounth AAAA
  const dateObj = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateFr = dateObj.toLocaleDateString('fr-FR', options);
  const dateDe = dateObj.toLocaleDateString('de-DE', options);

  return (
    <li className="ConcertDate">
      <Link
        className="ConcertDate-link"
        to={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="ConcertDate-link-info">
          <div className="ConcertDate-link-info-date">
            {language === 'fr' ? dateFr : dateDe}
          </div>
          <div className="ConcertDate-link-info-place">{place}</div>
          <div className="ConcertDate-link-info-event">{event}</div>
        </div>
        <div className="ConcertDate-link-city">{city}</div>
      </Link>
    </li>
  );
};

ConcertDate.propTypes = {
  date: PropTypes.string.isRequired,
  place: PropTypes.string,
  city: PropTypes.string.isRequired,
  event: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default ConcertDate;
