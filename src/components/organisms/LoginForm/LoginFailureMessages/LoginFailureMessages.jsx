import { PropTypes } from 'prop-types';

import './LoginFailureMessages.scss';

const LoginFailureMessages = ({ failureMessages }) => {
  return (
    <ul className="LoginFailureMessages">
      {failureMessages.map((message, index) => (
        <li key={index} className="LoginFailureMessages-message">
          {message}
        </li>
      ))}
    </ul>
  );
};

LoginFailureMessages.propTypes = {
  failureMessages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LoginFailureMessages;
