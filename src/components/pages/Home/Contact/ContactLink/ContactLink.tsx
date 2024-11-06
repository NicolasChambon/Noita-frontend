// Dependencies
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Types
import { RootState } from '../../../../../reducers/indexReducer';

// Icons
import { FaArrowRight } from 'react-icons/fa';

// Styles
import './ContactLink.scss';

const ContactLink = () => {
  const language = useSelector((state: RootState) => state.global.language);

  return (
    <Link
      className="ContactLink"
      to="mailto:info@noita.ch"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="ContactLink-text">
        {language === 'fr' ? 'Écris-nous ici' : 'Schreib uns hier'}
      </p>

      <FaArrowRight className="ContactLink-icon" />

      <p className="ContactLink-email">info@noita.ch</p>
    </Link>
  );
};

export default ContactLink;
