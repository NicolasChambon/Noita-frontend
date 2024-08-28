import background from '../../../../assets/images/noita-on-stage.jpg';

import './Dates.scss';

const Dates = () => {
  return (
    <div className="Dates" id="dates">
      <ul className="Dates-list">
        <li className="Dates-list-item">
          <div className="Dates-list-item-date">2022-01-01</div>
          <div className="Dates-list-item-city">City</div>
          <div className="Dates-list-item-place">Place</div>
          <div className="Dates-list-item-event">Event</div>
        </li>
      </ul>
    </div>
  );
};

export default Dates;
