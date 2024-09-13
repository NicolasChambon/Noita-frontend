// Dependencies
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

// React-icons
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { RxUpdate } from 'react-icons/rx';

// Redux actions
import {
  displayRemoveBox,
  hideRemoveBox,
} from '../../../../actions/carouselActions';

// Subcomponents
import ConfirmBox from '../../../organisms/ConfirmBox/ConfirmBox';

// Styles
import './BoCarouselCard.scss';

const BoCarouselCard = ({ url, id }) => {
  // Hooks
  const dispatch = useDispatch();

  // Redux state
  const { isRemoveBoxDisplayed, removeBoxId } = useSelector(
    (state) => state.carousel,
  );

  // Close confirm box when clicking elsewhere
  useEffect(() => {
    const handleClick = () => {
      if (isRemoveBoxDisplayed) {
        dispatch(hideRemoveBox());
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isRemoveBoxDisplayed, dispatch]);

  return (
    <div className="BoCarouselCard">
      <label htmlFor={`image${id}`} className="BoCarouselCard-label">
        <img
          src={url}
          alt="carousel-picture"
          className="BoCarouselCard-label-img"
        />
        <div className="BoCarouselCard-label-overlay">
          <RxUpdate className="BoCarouselCard-label-overlay-icon" />
        </div>
      </label>
      <input
        type="file"
        id={`image${id}`}
        className="BoCarouselCard-input"
        accept="image/*"
        // onChange={(e) => handleImageChange(e, changeNewsInput)}
      />
      <div className="BoCarouselCard-btns">
        <button className="BoCarouselCard-btns-btn arrow">
          <FaArrowCircleLeft />
        </button>
        <button
          className="BoCarouselCard-btns-btn trash"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(displayRemoveBox(id));
          }}
        >
          <FaTrashAlt />
        </button>
        {isRemoveBoxDisplayed && removeBoxId === id && (
          <ConfirmBox id={id} type="picture" />
        )}
        <button className="BoCarouselCard-btns-btn arrow">
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

BoCarouselCard.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BoCarouselCard;
