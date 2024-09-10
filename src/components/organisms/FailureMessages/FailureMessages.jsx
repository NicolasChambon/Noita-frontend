import { PropTypes } from 'prop-types';

import './FailureMessages.scss';

const FailureMessages = ({ failureMessages }) => {
  return (
    <ul className="FailureMessages">
      {failureMessages.map((message, index) => (
        <li key={index} className="FailureMessages-message">
          {message}
        </li>
      ))}
    </ul>
  );
};

FailureMessages.propTypes = {
  failureMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FailureMessages;
