import BoHeaderLogo from './BoHeaderLogo/BoHeaderLogo';
import BoHeaderNav from './BoHeaderNav/BoHeaderNav';
import BoHeaderSign from './BoHeaderSign/BoHeaderSign';

import './BoHeader.scss';

const BoHeader = () => {
  return (
    <header className="BoHeader">
      <div className="BoHeader-wrapper">
        <BoHeaderLogo />
        <BoHeaderNav />
        <BoHeaderSign />
      </div>
    </header>
  );
};

export default BoHeader;
