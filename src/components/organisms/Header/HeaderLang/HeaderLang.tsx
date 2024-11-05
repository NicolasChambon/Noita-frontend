// Dependencies
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { toogleLanguage } from '../../../../actions/global/globalActions';

// Types
import { RootState } from '../../../../reducers/indexReducer';
import { AppDispatch } from '../../../../store';

// Styles
import './HeaderLang.scss';

const HeaderLang = () => {
  const lang = useSelector((state: RootState) => state.global.language);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="HeaderLang">
      <button
        className={`HeaderLang-btn de ${lang === 'de' ? 'active' : ''}`}
        onClick={() => dispatch(toogleLanguage('de'))}
      >
        DE
      </button>
      <button
        className={`HeaderLang-btn fr ${lang === 'fr' ? 'active' : ''}`}
        onClick={() => dispatch(toogleLanguage('fr'))}
      >
        FR
      </button>
    </div>
  );
};

export default HeaderLang;
