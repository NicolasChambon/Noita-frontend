import { Link } from 'react-router-dom';

import './FooterBottom.scss';

const FooterBottom = () => {
  return (
    <div className="FooterBottom">
      <p className="FooterBottom-copyright">
        Copyright &copy; {new Date().getFullYear()} Noïta
      </p>
      <p className="FooterBottom-bar">|</p>
      <p className="FooterBottom-rights">Tous droits réservés</p>
      <p className="FooterBottom-bar">|</p>
      <p className="FooterBottom-credits">
        Site réalisé par{' '}
        <Link
          className="FooterBottom-credits-link"
          to="https://nicolaschambondev.vercel.app/"
          target="_blank"
        >
          Nicolas Chambon
        </Link>
      </p>
    </div>
  );
};

export default FooterBottom;
