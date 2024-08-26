import HeaderLogo from './HeaderLogo/HeaderLogo';

import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <HeaderLogo />
      </div>
    </header>
  );
};

export default Header;
