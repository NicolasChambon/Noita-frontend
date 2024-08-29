import { useSelector } from 'react-redux';

import Date from './Date/Date';

import './Dates.scss';

const Dates = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <section className="Dates" id="dates">
      <ul className="Dates-list">
        <h2 className="Dates-list-title">
          {language === 'fr' ? 'Prochaines dates' : 'Nächste Termine'}
        </h2>
        <Date date="6 DEC. 2024" place="Galotti Musikwerkstatt" city="Zürich" />
        <Date date="6 DEC. 2024" place="Galotti Musikwerkstatt" city="Zürich" />
        <Date date="6 DEC. 2024" place="Galotti Musikwerkstatt" city="Zürich" />
      </ul>

      <ul className="Dates-list">
        <h2 className="Dates-list-title">
          {language === 'fr' ? 'Nous y étions' : 'Wir waren da'}
        </h2>
        <Date
          date="20 JUIL. 2024"
          place="Parc des spectacles"
          city="Röthenbach Im Emmental"
          event="Vertanzt Festival"
        />
        <Date
          date="20 JUIL. 2024"
          place="Parc des spectacles"
          city="Röthenbach Im Emmental"
          event="Vertanzt Festival"
        />
      </ul>
    </section>
  );
};

export default Dates;
