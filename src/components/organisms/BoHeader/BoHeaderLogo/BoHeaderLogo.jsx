import { Link } from 'react-router-dom';

import NoitaLogo from '../../../../assets/logos/noita-logo-white.svg';

import './BoHeaderLogo.scss';

const BoHeaderLogo = () => {
  return (
    <Link className="BoHeaderLogo" to="/admin">
      <img className="BoHeaderLogo-img" src={NoitaLogo} alt="Noita Logo" />
      <h4 className="BoHeaderLogo-title">Back-Office</h4>
    </Link>
  );
};

export default BoHeaderLogo;
