import MenuNav from './MenuNav/MenuNav';
import MenuLang from './MenuLang/MenuLang';

import './HeaderMenu.scss';

const HeaderMenu = () => {
  return (
    <div className="HeaderMenu">
      <MenuNav />
      <MenuLang />
    </div>
  );
};

export default HeaderMenu;
