import { useSelector } from 'react-redux';

import ContactTextBox from './ContactTextBox/ContactTextBox';
import ContactLink from './ContactLink/ContactLink';

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
              ? 'Tu es une organisatrice et tu souhaites nous inviter ?'
              : 'Bist du eine Veranstalterin und möchtest uns einladen ?'
          }
          text={
            language === 'fr'
              ? 'Nous jouons aussi bien en acoustique que sonorisées.'
              : 'Wir spielen sowohl akustisch als auch mit Tonanlage.'
          }
        />
        <ContactTextBox
          question={
            language === 'fr'
              ? 'Tu es musicienne et souhaites te joindre à nous ?'
              : 'Bist du Musikerin und möchtest mitmachen ?'
          }
          text={
            language === 'fr'
              ? 'Nous recherchons une percussionniste.'
              : 'Wir suchen eine Perkussionistin.'
          }
        />
      </div>

      <ContactLink />
    </section>
  );
};

export default Contact;
