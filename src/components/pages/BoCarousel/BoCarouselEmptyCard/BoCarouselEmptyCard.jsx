// React-icons
import { IoAddCircleOutline } from 'react-icons/io5';

// Redux actions
import { changePictureInput } from '../../../../actions/carouselActions';

// Utils
import { handleImageChange } from '../../../../utils/imgUtils';

// Styles
import './BoCarouselEmptyCard.scss';

const BoCarouselEmptyCard = () => {
  return (
    <div className="BoCarouselEmptyCard">
      <label htmlFor="newPicture" className="BoCarouselEmptyCard-label">
        <IoAddCircleOutline className="BoCarouselEmptyCard-label-icon" />
      </label>
      <input
        type="file"
        id="newPicture"
        className="BoCarouselEmptyCard-input"
        accept="image/*"
        onChange={(e) => handleImageChange(e, changePictureInput, true)}
      />
    </div>
  );
};

export default BoCarouselEmptyCard;
