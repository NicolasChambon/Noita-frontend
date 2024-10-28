import { useSelector, useDispatch } from 'react-redux';

import { toogleLanguage } from '../../../../../actions/global/globalActions';

import './MenuLang.scss';

const MenuLang = () => {
  const lang = useSelector((state) => state.global.language);
  const dispatch = useDispatch();

  return (
    <div className="MenuLang">
      <button
        className={`MenuLang-btn de ${lang === 'de' ? 'active' : ''}`}
        onClick={() => dispatch(toogleLanguage('de'))}
      >
        DE
      </button>
      <button
        className={`MenuLang-btn fr ${lang === 'fr' ? 'active' : ''}`}
        onClick={() => dispatch(toogleLanguage('fr'))}
      >
        FR
      </button>
    </div>
  );
};

export default MenuLang;
