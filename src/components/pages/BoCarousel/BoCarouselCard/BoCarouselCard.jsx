// Dependencies
import { PropTypes } from 'prop-types';

// React-icons
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { RxUpdate } from 'react-icons/rx';

// Styles
import './BoCarouselCard.scss';

const BoCarouselCard = ({ url }) => {
  return (
    <div className="BoCarouselCard">
      <label htmlFor="image64" className="BoCarouselCard-label">
        <img src={url} alt="news" className="BoCarouselCard-label-img" />
        <div className="BoCarouselCard-label-overlay">
          <RxUpdate className="BoCarouselCard-label-overlay-icon" />
        </div>
      </label>
      <input
        type="file"
        id="image64"
        className="BoCarouselCard-input"
        accept="image/*"
        // onChange={(e) => handleImageChange(e, changeNewsInput)}
      />
      <div className="BoCarouselCard-btns">
        <button className="BoCarouselCard-btns-btn arrow">
          <FaArrowCircleLeft />
        </button>
        <button className="BoCarouselCard-btns-btn trash">
          <FaTrashAlt />
        </button>
        <button className="BoCarouselCard-btns-btn arrow">
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

BoCarouselCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default BoCarouselCard;
