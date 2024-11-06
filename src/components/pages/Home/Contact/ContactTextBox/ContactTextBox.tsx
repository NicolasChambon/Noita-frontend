import { Link } from 'react-router-dom';

import './ContactTextBox.scss';

const ContactTextBox: (props: {
  question: string;
  text: string;
}) => JSX.Element = ({ question, text }) => {
  return (
    <div className="ContactTextBox">
      <Link
        className="ContactTextBox-link"
        to="mailto:info@noita.ch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="ContactTextBox-link-p question">{question}</p>
        <p className="ContactTextBox-link-p">{text}</p>
      </Link>
    </div>
  );
};

export default ContactTextBox;
