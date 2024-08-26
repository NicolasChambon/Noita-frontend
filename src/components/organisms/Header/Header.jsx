import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderLang from './HeaderLang/HeaderLang';

import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <HeaderLogo />
        <HeaderNav />
        <HeaderLang />
      </div>
    </header>
  );
};

export default Header;
