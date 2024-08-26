import { Link } from 'react-router-dom';

import NoitaLogo from '../../../../assets/logos/noita-logo.svg';

import './HeaderLogo.scss';

const HeaderLogo = () => {
  return (
    <Link className="HeaderLogo">
      <img className="HeaderLogo-img" src={NoitaLogo} alt="Noita Logo" />
    </Link>
  );
};

export default HeaderLogo;
