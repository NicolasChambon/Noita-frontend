import { Link } from 'react-router-dom';

import { GrInstagram } from 'react-icons/gr';
import { RiYoutubeLine } from 'react-icons/ri';

import noitaLogo from '../../../../assets/logos/noita-footer-logo-gradient.svg';

import './FooterLogoSocials.scss';

const FooterLogoSocials = () => {
  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      const page = document.querySelector('.App');
      page.scrollIntoView({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="FooterLogoSocials">
      <Link className="FooterLogoSocials-link" onClick={handleLogoClick}>
        <img
          className="FooterLogoSocials-link-logo"
          src={noitaLogo}
          alt="Noïta logo"
        />
      </Link>

      <p className="FooterLogoSocials-text">
        Rejoignez-nous sur nos réseaux sociaux.
      </p>

      <div className="FooterLogoSocials-socials">
        <Link
          className="FooterLogoSocials-socials-link"
          to="https://www.instagram.com/noitachor/"
          target="_blank"
        >
          <GrInstagram />
        </Link>

        <Link
          className="FooterLogoSocials-socials-link YT"
          to="https://www.youtube.com/@Noïta-s6b"
          target="_blank"
        >
          <RiYoutubeLine />
        </Link>
      </div>
    </div>
  );
};

export default FooterLogoSocials;
