import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { deleteConcert } from '../../../actions/concertsActions';
import { deleteNews } from '../../../actions/newsActions';

import './ConfirmBox.scss';

const ConfirmBox = ({ id, type }) => {
  const dispatch = useDispatch();

  return (
    <div className="ConfirmBox">
      <p className="ConfirmBox-text">
        Are you sure you want to delete this concert?
      </p>
      <div className="ConfirmBox-buttons">
        <button
          className="ConfirmBox-buttons-yes"
          onClick={() => {
            type === 'news' && dispatch(deleteNews(id));
            type === 'concert' && dispatch(deleteConcert(id));
          }}
        >
          Yes
        </button>
        <button className="ConfirmBox-buttons-no">No</button>
      </div>
    </div>
  );
};

ConfirmBox.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default ConfirmBox;