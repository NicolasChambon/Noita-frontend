import ContactTextBox from './ContactTextBox/ContactTextBox';
import ContactLink from './ContactLink/ContactLink';
import ContactEmail from './ContactEmail/ContactEmail';

import './Contact.scss';

const Contact = () => {
  return (
    <section className="Contact" id="contact">
      <h2 className="Contact-title">Contact</h2>
      <div className="Contact-texts">
        <ContactTextBox
          question="Tu es un(e) organisateur(trice) et tu souhaites nous inviter ?"
          text="Nous jouons aussi bien en acoustique qu'avec sonorisation."
        />
        <ContactTextBox
          question="Tu es une chanteuse et tu souhaites te joindre à nous ?"
          text="Nous recherchons de nouvelles voix heureuses."
        />
      </div>

      <ContactLink />

      <p className="Contact-textAdress">
        Ou en utilisant notre adresse e-mail :
      </p>

      <ContactEmail />
    </section>
  );
};

export default Contact;
