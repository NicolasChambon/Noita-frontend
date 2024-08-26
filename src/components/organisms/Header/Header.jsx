import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderLang from './HeaderLang/HeaderLang';
import MenuBtn from './MenuBtn/MenuBtn';

import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <HeaderLogo />

        {/* Disappears below 600px */}
        <HeaderNav />
        <HeaderLang />

        {/* Appears below 600px */}
        <MenuBtn />
      </div>
    </header>
  );
};

export default Header;
