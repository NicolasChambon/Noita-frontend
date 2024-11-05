// Dependencies
import { useSelector } from 'react-redux';

// Types
import { RootState } from '../../../reducers/indexReducer';

// Components
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderLang from './HeaderLang/HeaderLang';
import MenuBtn from './MenuBtn/MenuBtn';
import HeaderMenu from './HeaderMenu/HeaderMenu';

// Styles
import './Header.scss';

const Header = () => {
  const isMenuOpen = useSelector((state: RootState) => state.global.headerMenu);

  return (
    <header className="Header">
      <div className="Header-wrapper">
        <HeaderLogo />

        {/* Disappears below 600px */}
        <HeaderNav />
        <HeaderLang />

        {/* Appears below 600px */}
        <MenuBtn />

        {isMenuOpen && <HeaderMenu />}
      </div>
    </header>
  );
};

export default Header;
