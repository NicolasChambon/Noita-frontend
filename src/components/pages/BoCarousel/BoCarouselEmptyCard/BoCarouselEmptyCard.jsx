// React-icons
import { FaArrowCircleLeft } from 'react-icons/fa';
import { IoAddCircleOutline } from 'react-icons/io5';

// Styles
import './BoCarouselEmptyCard.scss';

const BoCarouselEmptyCard = () => {
  return (
    <div className="BoCarouselEmptyCard">
      <label htmlFor="image64" className="BoCarouselEmptyCard-label">
        <IoAddCircleOutline className="BoCarouselEmptyCard-label-icon" />
      </label>
      <input
        type="file"
        id="image64"
        className="BoCarouselEmptyCard-input"
        accept="image/*"
        // onChange={(e) => handleImageChange(e, changeNewsInput)}
      />
    </div>
  );
};

export default BoCarouselEmptyCard;
