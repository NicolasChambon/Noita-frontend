import PropTypes from 'prop-types';

import './ContactTextBox.scss';

const ContactTextBox = ({ question, text }) => {
  return (
    <div className="ContactTextBox">
      <p className="ContactTextBox-p question">{question}</p>
      <p className="ContactTextBox-p">{text}</p>
    </div>
  );
};

ContactTextBox.propTypes = {
  question: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactTextBox;
