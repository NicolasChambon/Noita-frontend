// Dependencies
import { useDispatch } from 'react-redux';

// Actions
import { deleteConcert } from '../../../actions/concert/concertsActions';
import { deleteNews } from '../../../actions/news/newsActions';
import { deletePicture } from '../../../actions/carousel/carouselActions';

// Types
import { AppDispatch } from '../../../store';

// Styles
import './ConfirmBox.scss';

const ConfirmBox: (props: { id: number; type: string }) => JSX.Element = ({
  id,
  type,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={`ConfirmBox ${type}`}>
      <p className="ConfirmBox-text">
        Are you sure you want to delete this {type}?
      </p>
      <div className="ConfirmBox-buttons">
        <button
          className="ConfirmBox-buttons-yes"
          onClick={() => {
            if (type === 'news') {
              dispatch(deleteNews(id));
            } else if (type === 'concert') {
              dispatch(deleteConcert(id));
            } else if (type === 'picture') {
              dispatch(deletePicture(id));
            }
          }}
        >
          Yes
        </button>
        <button className="ConfirmBox-buttons-no">No</button>
      </div>
    </div>
  );
};

export default ConfirmBox;
