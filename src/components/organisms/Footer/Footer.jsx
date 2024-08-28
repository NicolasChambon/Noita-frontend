import { Link } from 'react-router-dom';

import { GrInstagram } from 'react-icons/gr';
import { RiYoutubeLine } from 'react-icons/ri';

import noitaLogo from '../../../assets/logos/noita-footer-logo-gradient.svg';

import FooterTopDivider from './FooterTopDivider/FooterTopDivider';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <FooterTopDivider />
      <div className="Footer-top">
        <div className="Footer-top-logoSocials">
          <Link className="Footer-top-logoSocials-link">
            <img
              className="Footer-top-logoSocials-link-logo"
              src={noitaLogo}
              alt="Noïta logo"
            />
          </Link>

          <p className="Footer-top-logoSocials-text">
            Rejoignez-nous sur nos réseaux sociaux
          </p>
          <div className="Footer-top-logoSocials-socials">
            <Link className="Footer-top-logoSocials-socials-link">
              <GrInstagram />
            </Link>
            <Link className="Footer-top-logoSocials-socials-link">
              <RiYoutubeLine />
            </Link>
          </div>
        </div>
        <div className="Footer-top-news">
          <h4 className="Footer-top-news-title">Actualités</h4>
          <p className="Footer-top-news-text">
            Suivez les dernières nouvelles du groupe
          </p>
        </div>
        <nav className="Footer-top-nav">
          <h4 className="Footer-top-nav-title">Navigation</h4>
          <ul className="Footer-top-nav-list">
            <li className="Footer-top-nav-list-item">
              <Link className="Footer-top-nav-list-item-link">Indentité</Link>
            </li>
            <li className="Footer-top-nav-list-item">
              <Link className="Footer-top-nav-list-item-link">Médias</Link>
            </li>
            <li className="Footer-top-nav-list-item">
              <Link className="Footer-top-nav-list-item-link">Concerts</Link>
            </li>
            <li className="Footer-top-nav-list-item">
              <Link className="Footer-top-nav-list-item-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="Footer-bottom">
        <p className="Footer-bottom-copyright">
          Copyright &copy; {new Date().getFullYear()} Noïta
        </p>
        <p className="Footer-bottom-bar">|</p>
        <p className="Footer-bottom-rights">Tous droits réservés</p>
        <p className="Footer-bottom-bar">|</p>
        <p className="Footer-bottom-credits">
          Site réalisé par{' '}
          <Link
            className="Footer-bottom-credits-link"
            to="https://nicolaschambondev.vercel.app/"
            target="_blank"
          >
            Nicolas Chambon
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
