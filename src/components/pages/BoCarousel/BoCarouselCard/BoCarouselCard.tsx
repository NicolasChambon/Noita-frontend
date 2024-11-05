// Dependencies
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// React-icons
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { RxUpdate } from 'react-icons/rx';

// Redux actions
import {
  displayRemoveBox,
  hideRemoveBox,
  changePictureInput,
  changePosition,
} from '../../../../actions/carousel/carouselActions';

// Utils
import { handleImageChange } from '../../../../utils/imgUtils';

// Types
import { RootState } from '../../../../reducers/indexReducer';

// Subcomponents
import ConfirmBox from '../../../organisms/ConfirmBox/ConfirmBox';

// Styles
import './BoCarouselCard.scss';
import { AppDispatch } from '../../../../store';

const BoCarouselCard: (props: {
  url: string;
  id: number;
  position: string;
}) => JSX.Element = ({ url, id, position }) => {
  // Hooks
  const dispatch = useDispatch<AppDispatch>();

  // Redux state
  const { isRemoveBoxDisplayed, removeBoxId } = useSelector(
    (state: RootState) => state.carousel,
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
        onChange={(e) => handleImageChange(e, changePictureInput, true, id)}
      />
      <div className="BoCarouselCard-btns">
        {position !== 'first' && (
          <button
            className="BoCarouselCard-btns-btn arrow"
            onClick={() => dispatch(changePosition(id, 'left'))}
          >
            <FaArrowCircleLeft />
          </button>
        )}
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
        {position !== 'last' && (
          <button
            className="BoCarouselCard-btns-btn arrow"
            onClick={() => dispatch(changePosition(id, 'right'))}
          >
            <FaArrowCircleRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default BoCarouselCard;
