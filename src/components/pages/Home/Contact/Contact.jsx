import { MdOutlineEmail } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import './Contact.scss';

const Contact = () => {
  return (
    <section className="Contact" id="contact">
      <h2 className="Contact-title">Contact</h2>
      <div className="Contact-texts">
        <div className="Contact-texts-text left">
          <p className="Contact-texts-text-p question">
            Tu es une organisatrice et tu souhaites nous inviter ?
          </p>
          <p className="Contact-texts-text-p">
            Nous jouons aussi bien en acoustique qu&apos;avec sonorisation.
          </p>
        </div>
        <div className="Contact-texts-text right">
          <p className="Contact-texts-text-p question">
            Tu es une chanteuse et tu souhaites te joindre à nous ?
          </p>
          <p className="Contact-texts-text-p">
            Nous recherchons de nouvelles voix heureuses.
          </p>
        </div>
      </div>
      <Link
        className="Contact-link"
        to="mailto:noitachor@gmail.com"
        target="_blank"
      >
        Écris nous ici <FaArrowRight />
      </Link>

      <p className="Contact-textAdress">
        Ou en utilisant notre adresse e-mail :
      </p>

      <div className="Contact-emailAdress">
        <MdOutlineEmail className="Contact-emailAdress-icon" />
        <div className="Contact-emailAdress-text">
          <p className="Contact-emailAdress-text-email">E-mail</p>
          <p className="Contact-emailAdress-text-adress">
            noitachor@gmail.com{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
