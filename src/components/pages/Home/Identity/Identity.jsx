import { useSelector } from 'react-redux';

import IdentityBottomDivider from './IdentityBottomDivider/IdentityBottomDivider';

import background from '../../../../assets/images/noita-on-stage.jpg';

import './Identity.scss';

const Identity = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <section className="Identity" id="identity">
      <img className="Identity-img" src={background} alt="Noita on stage" />
      <div className="Identity-text">
        <p className="Identity-text-item">
          {language === 'fr'
            ? 'Noïta, ce sont des femmes qui chantent et qui jouent des percussions'
            : 'Noïta, das sind Frauen, die singen und Perkussion spielen'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? 'Noïta, ce sont des chants traditionnels mais aussi modernes'
            : 'Noïta, das sind traditionelle, aber auch moderne Lieder'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? "Noïta, ce sont des sons qui viennent d'Occitanie, de Grèce, de Finlande, du Mexique, de partout"
            : 'Noïta, das sind Klänge aus Okzitanien, Griechenland, Finnland, Mexiko, überall her'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? 'Noïta, ça veut dire Sorcière'
            : 'Noïta, das bedeutet Hexe'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? "Noïta, c'est la femme libre qui vit en harmonie avec le vivant"
            : 'Noïta, das ist die freie Frau, die im Einklang mit dem Leben lebt'}
        </p>
        <p className="Identity-text-item">
          {language === 'fr'
            ? "Noïta, ça s'écoute et ça se danse dans la joie"
            : 'Noïta, das kann man hören und in Freude tanzen'}
        </p>
      </div>
      <IdentityBottomDivider />
    </section>
  );
};

export default Identity;
