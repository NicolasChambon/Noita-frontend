import { MdOutlineEmail } from 'react-icons/md';

import './ContactEmail.scss';

const ContactEmail = () => {
  return (
    <div className="ContactEmail">
      <MdOutlineEmail className="ContactEmail-icon" />
      <div className="ContactEmail-text">
        <p className="ContactEmail-text-email">E-mail</p>
        <p className="ContactEmail-text-adress">noitachor@gmail.com </p>
      </div>
    </div>
  );
};

export default ContactEmail;
