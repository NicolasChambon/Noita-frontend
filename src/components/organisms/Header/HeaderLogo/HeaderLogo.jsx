import { Link } from 'react-router-dom';

import NoitaLogo from '../../../../assets/logos/noita-logo.svg';

import './HeaderLogo.scss';

const HeaderLogo = () => {
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
    <Link className="HeaderLogo" onClick={handleLogoClick}>
      <img className="HeaderLogo-img" src={NoitaLogo} alt="Noita Logo" />
    </Link>
  );
};

export default HeaderLogo;
