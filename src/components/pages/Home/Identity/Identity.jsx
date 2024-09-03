import { useSelector } from 'react-redux';

import IdentityBottomDivider from './IdentityBottomDivider/IdentityBottomDivider';

import './Identity.scss';

const Identity = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <section className="Identity" id="identity">
      <div className="Identity-text">
        <p className="Identity-text-item first">
          {language === 'fr'
            ? 'Noïta, ce sont des femmes qui chantent et qui jouent des percussions'
            : 'Noïta steht für Frauen, die singen und trommeln'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? 'Noïta interprète des chants issus de la tradition orale ainsi que des compositions plus récentes'
            : 'Noïta interpretiert Lieder aus der mündlichen Tradition sowie neueren Kompositionen'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? "Noïta, ce sont des sons qui viennent d'Occitanie, de Grèce, de Finlande, du Mexique, de partout"
            : 'Noïta steht für Klänge aus Okzitanien, Griechenland, Finnland, Mexiko und von anderswo'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? 'Noïta, ça veut dire Sorcière, ça veut dire Nuit'
            : 'Noïta bedeutet Hexe, bedeutet Nacht'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? "Noïta, c'est la femme libre qui vit en harmonie avec le vivant"
            : 'Noïta ist die freie Frau, die im Einklang mit allem Lebendigen steht'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? "Noïta, ça s'écoute et ça se danse"
            : 'Noïta lässt sich hören, aber auch tanzen'}
        </p>
      </div>
      <IdentityBottomDivider />
    </section>
  );
};

export default Identity;
