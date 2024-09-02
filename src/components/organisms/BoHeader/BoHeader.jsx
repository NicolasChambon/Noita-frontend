import BoHeaderLogo from './BoHeaderLogo/BoHeaderLogo';

import './BoHeader.scss';

const BoHeader = () => {
  return (
    <header className="BoHeader">
      <div className="Header-wrapper">
        <BoHeaderLogo />

        {/* Disappears below 600px */}
        {/* <HeaderNav /> */}
      </div>
    </header>
  );
};

export default BoHeader;
