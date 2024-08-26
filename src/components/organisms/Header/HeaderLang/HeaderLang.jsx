import { useSelector, useDispatch } from 'react-redux';

import { toogleLanguage } from '../../../../actions/globalActions';

import './HeaderLang.scss';

const HeaderLang = () => {
  const lang = useSelector((state) => state.global.language);
  const dispatch = useDispatch();

  return (
    <div className="HeaderLang">
      <button
        className={`HeaderLang-btn fr ${lang === 'fr' ? 'active' : ''}`}
        onClick={() => dispatch(toogleLanguage('fr'))}
      >
        FR
      </button>
      <button
        className={`HeaderLang-btn de ${lang === 'de' ? 'active' : ''}`}
        onClick={() => dispatch(toogleLanguage('de'))}
      >
        DE
      </button>
    </div>
  );
};

export default HeaderLang;
