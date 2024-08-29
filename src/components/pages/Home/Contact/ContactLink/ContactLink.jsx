import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';

import './ContactLink.scss';

const ContactLink = () => {
  return (
    <Link
      className="ContactLink"
      to="mailto:noitachor@gmail.com"
      target="_blank"
    >
      Écris nous ici <FaArrowRight />
    </Link>
  );
};

export default ContactLink;
