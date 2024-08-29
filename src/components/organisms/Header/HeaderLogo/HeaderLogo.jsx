import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import NoitaLogo from '../../../../assets/logos/noita-logo.svg';

import './HeaderLogo.scss';

const HeaderLogo = () => {
  // const navigate = useNavigate();

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      const page = document.querySelector('.App');
      page.scrollIntoView({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
    // if (window.location.pathname !== '/') {
    //   navigate('/');
    // }
  };

  return (
    <Link className="HeaderLogo" to="/" onClick={handleLogoClick}>
      <img className="HeaderLogo-img" src={NoitaLogo} alt="Noita Logo" />
    </Link>
  );
};

export default HeaderLogo;
