import { Link } from 'react-router-dom';

import FooterTopDivider from './FooterTopDivider/FooterTopDivider';
import FooterLogoSocials from './FooterLogoSocials/FooterLogoSocials';

import './Footer.scss';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 64; // 64px is the height of the fixed header

    // element.getBoundingClientRect().top => distance from the top of the element to the top of the viewport
    // window.scrollY => distance from the top of the document to the top of the viewport
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="Footer">
      <FooterTopDivider />
      <div className="Footer-top">
        <FooterLogoSocials />
        <div className="Footer-top-news">
          <Link className="Footer-top-news-link">
            <h4 className="Footer-top-news-link-title">Actualités</h4>
          </Link>
          <p className="Footer-top-news-text">
            Suivez les dernières nouvelles du groupe.
          </p>
        </div>
        <nav className="Footer-top-nav">
          <h4 className="Footer-top-nav-title">Navigation</h4>
          <ul className="Footer-top-nav-list">
            <li className="Footer-top-nav-list-item">
              <Link
                className="Footer-top-nav-list-item-link"
                onClick={() => scrollToSection('identity')}
              >
                Indentité
              </Link>
            </li>
            <li className="Footer-top-nav-list-item">
              <Link
                className="Footer-top-nav-list-item-link"
                onClick={() => scrollToSection('media')}
              >
                Médias
              </Link>
            </li>
            <li className="Footer-top-nav-list-item">
              <Link
                className="Footer-top-nav-list-item-link"
                onClick={() => scrollToSection('dates')}
              >
                Concerts
              </Link>
            </li>
            <li className="Footer-top-nav-list-item">
              <Link
                className="Footer-top-nav-list-item-link"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Link>
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
