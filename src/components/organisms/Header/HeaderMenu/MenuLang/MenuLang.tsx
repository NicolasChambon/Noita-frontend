// Dependencies
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { toogleLanguage } from '../../../../../actions/global/globalActions';

// Types
import { RootState } from '../../../../../reducers/indexReducer';
import { AppDispatch } from '../../../../../store';

// Styles
import './MenuLang.scss';

const MenuLang = () => {
  const lang = useSelector((state: RootState) => state.global.language);
  const dispatch = useDispatch<AppDispatch>();

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
