import { useSelector } from 'react-redux';

import ContactTextBox from './ContactTextBox/ContactTextBox';
import ContactLink from './ContactLink/ContactLink';
import ContactEmail from './ContactEmail/ContactEmail';

import './Contact.scss';

const Contact = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <section className="Contact" id="contact">
      <h2 className="Contact-title">
        {language === 'fr' ? 'Contact' : 'Kontakt'}
      </h2>
      <div className="Contact-texts">
        <ContactTextBox
          question={
            language === 'fr'
              ? 'Tu es un(e) organisateur(trice) et tu souhaites nous inviter ?'
              : 'Bist du ein(e) Organisator(in) und möchtest uns einladen ?'
          }
          text={
            language === 'fr'
              ? "Nous jouons aussi bien en acoustique qu'avec sonorisation."
              : 'Wir spielen sowohl akustisch als auch mit Sound.'
          }
        />
        <ContactTextBox
          question={
            language === 'fr'
              ? 'Tu es une chanteuse et tu souhaites te joindre à nous ?'
              : 'Bist du eine Sängerin und möchtest uns beitreten ?'
          }
          text={
            language === 'fr'
              ? 'Nous recherchons de nouvelles voix heureuses.'
              : 'Wir suchen neue glückliche Stimmen.'
          }
        />
      </div>

      <ContactLink />

      <p className="Contact-textAdress">
        {language === 'fr'
          ? 'Ou en utilisant notre adresse e-mail :'
          : 'Oder per E-Mail :'}
      </p>

      <ContactEmail />
    </section>
  );
};

export default Contact;
