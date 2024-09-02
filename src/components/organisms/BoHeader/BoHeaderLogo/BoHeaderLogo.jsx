import { Link } from 'react-router-dom';

import NoitaLogo from '../../../../assets/logos/noita-logo.svg';

import './BoHeaderLogo.scss';

const BoHeaderLogo = () => {
  return (
    <Link className="BoHeaderLogo" to="/">
      <img className="BoHeaderLogo-img" src={NoitaLogo} alt="Noita Logo" />
    </Link>
  );
};

export default BoHeaderLogo;
