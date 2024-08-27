import background from '../../../../assets/images/noita-on-stage.jpg';

import './Dates.scss';

const Dates = () => {
  return (
    <div className="Dates" id="dates">
      <img className="Dates-img" src={background} alt="Noita on stage" />
      <div className="Dates-text">
        <p className="Dates-text-item">
          Noïta, ce sont des femmes qui chantent et qui jouent des percussions
        </p>
        <p className="Dates-text-item">
          Noïta, ce sont des chants traditionnels mais aussi modernes
        </p>
        <p className="Dates-text-item">
          Noïta, ce sont des sons qui viennent d&apos;Occitanie, de Grèce, de
          Finlande, du Mexique, de partout
        </p>
        <p className="Dates-text-item">Noïta, ça veut dire Sorcière</p>
        <p className="Dates-text-item">
          Noïta, c&apos;est la femme libre qui vit en harmonie avec le vivant
        </p>
        <p className="Dates-text-item">
          Noïta, ça s&apos;écoute et ça se danse dans la joie
        </p>
      </div>
    </div>
  );
};

export default Dates;