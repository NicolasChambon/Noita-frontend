import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { deleteConcert } from '../../../actions/concertsActions';

import './ConfirmBox.scss';

const ConfirmBox = ({ concertId }) => {
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
            dispatch(deleteConcert(concertId));
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
  concertId: PropTypes.number.isRequired,
};

export default ConfirmBox;
