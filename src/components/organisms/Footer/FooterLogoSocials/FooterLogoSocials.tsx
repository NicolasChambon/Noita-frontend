import { Link } from 'react-router-dom';

import { GrInstagram } from 'react-icons/gr';
import { RiYoutubeLine } from 'react-icons/ri';
import { AiOutlineFacebook } from 'react-icons/ai';

import { handleLogoClick } from '../../../../utils/scrollUtils';

import noitaLogo from '../../../../assets/logos/noita-logo-white.svg';

import './FooterLogoSocials.scss';

const FooterLogoSocials = () => {
  return (
    <div className="FooterLogoSocials">
      <Link className="FooterLogoSocials-link" to="/" onClick={handleLogoClick}>
        <img
          className="FooterLogoSocials-link-logo"
          src={noitaLogo}
          alt="Noïta logo"
        />
      </Link>

      <div className="FooterLogoSocials-socials">
        <Link
          className="FooterLogoSocials-socials-link"
          to="https://www.instagram.com/noitavox/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrInstagram />
        </Link>
        <Link
          className="FooterLogoSocials-socials-link YT"
          to="https://www.youtube.com/@Noïta-s6b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiYoutubeLine />
        </Link>
        <Link
          className="FooterLogoSocials-socials-link YT"
          to="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineFacebook />
        </Link>
      </div>
    </div>
  );
};

export default FooterLogoSocials;
