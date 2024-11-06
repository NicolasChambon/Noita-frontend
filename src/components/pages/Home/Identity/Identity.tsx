// Dependencies
import { useSelector } from 'react-redux';

// Types
import { RootState } from '../../../../reducers/indexReducer';

// Components
import IdentityBottomDivider from './IdentityBottomDivider/IdentityBottomDivider';

// Styles
import './Identity.scss';

const Identity = () => {
  const language = useSelector((state: RootState) => state.global.language);

  return (
    <section className="Identity" id="identity">
      <div className="Identity-text">
        <p className="Identity-text-item first">
          {language === 'fr'
            ? 'Noïta, ça veut dire Sorcière et ça veut dire Nuit.'
            : 'Noïta bedeutet Hexe, bedeutet Nacht.'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? "Noïta, c'est la femme libre qui vit en harmonie avec le vivant."
            : 'Noïta bedeutet die freie Frau, die im Einklang mit allem Lebendigen steht.'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? "Noïta, c'est un groupe de femmes."
            : 'Noïta ist eine Gruppe von Frauen.'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? 'Noïta, ce sont des chants issus de la tradition orale. Ce sont aussi des compositions plus récentes.'
            : 'Noïta interpretiert Lieder aus der mündlichen Tradition sowie neue Kompositionen.'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? "Noïta, ce sont des sons d'Occitanie mais pas que. Aussi de Grèce, de Finlande, du Mexique, de partout."
            : 'Noïta steht für Klänge aus Okzitanien, Griechenland, Finnland, Mexiko und von anderswo.'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? "Noïta, ça s'écoute et ça se bouge."
            : 'Noïta lässt sich hören, aber auch tanzen.'}
        </p>
      </div>
      <IdentityBottomDivider />
    </section>
  );
};

export default Identity;
