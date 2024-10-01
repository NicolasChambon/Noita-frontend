// Dependencies
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

// Icons
import { IoClose } from 'react-icons/io5';

// Redux actions
import { activeOnePicture } from '../../../../../../actions/carouselActions';

// Styles
import './ActivePicture.scss';

const ActivePicture = ({ pictureUrl }) => {
  // Hooks
  const dispatch = useDispatch();

  return (
    <div className="ActivePicture">
      <button
        className="ActivePicture-close"
        onClick={() => dispatch(activeOnePicture(null))}
      >
        <IoClose className="ActivePicture-close-icon" />
      </button>
      <img className="ActivePicture-image" src={pictureUrl} alt="Active" />
    </div>
  );
};

ActivePicture.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
};

export default ActivePicture;
