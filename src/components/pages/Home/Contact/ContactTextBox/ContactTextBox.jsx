import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './ContactTextBox.scss';

const ContactTextBox = ({ question, text }) => {
  return (
    <div className="ContactTextBox">
      <Link
        className="ContactTextBox-link"
        to="mailto:noitachor@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="ContactTextBox-link-p question">{question}</p>
        <p className="ContactTextBox-link-p">{text}</p>
      </Link>
    </div>
  );
};

ContactTextBox.propTypes = {
  question: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactTextBox;
