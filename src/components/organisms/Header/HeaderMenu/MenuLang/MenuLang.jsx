import { useSelector, useDispatch } from 'react-redux';

import { toogleLanguage } from '../../../../../actions/globalActions';

import './MenuLang.scss';

const MenuLang = () => {
  const lang = useSelector((state) => state.global.language);
  const dispatch = useDispatch();

  return (
    <div className="MenuLang">
      <button
        className={`MenuLang-btn fr ${lang === 'fr' ? 'active' : ''}`}
        onClick={() => dispatch(toogleLanguage('fr'))}
      >
        FR
      </button>
      <button
        className={`MenuLang-btn de ${lang === 'de' ? 'active' : ''}`}
        onClick={() => dispatch(toogleLanguage('de'))}
      >
        DE
      </button>
    </div>
  );
};

export default MenuLang;
