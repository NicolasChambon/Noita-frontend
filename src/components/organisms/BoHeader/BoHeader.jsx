import BoHeaderLogo from './BoHeaderLogo/BoHeaderLogo';
import BoHeaderNav from './BoHeaderNav/BoHeaderNav';

import './BoHeader.scss';

const BoHeader = () => {
  return (
    <header className="BoHeader">
      <div className="BoHeader-wrapper">
        <BoHeaderLogo />

        <BoHeaderNav />
      </div>
    </header>
  );
};

export default BoHeader;
