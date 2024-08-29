import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaArrowRight } from 'react-icons/fa';

import './ContactLink.scss';

const ContactLink = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <Link
      className="ContactLink"
      to="mailto:noitachor@gmail.com"
      target="_blank"
    >
      {language === 'fr' ? 'Écris nous ici' : 'Schreib uns hier'}{' '}
      <FaArrowRight />
    </Link>
  );
};

export default ContactLink;
