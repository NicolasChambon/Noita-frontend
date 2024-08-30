import { useSelector } from 'react-redux';

import Date from './Date/Date';

import './Dates.scss';

const Dates = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <section className="Dates" id="dates">
      <ul className="Dates-list">
        <h2 className="Dates-list-title">
          {language === 'fr' ? 'On y sera' : 'Wir sind dabei'}
        </h2>
        <Date
          date={language === 'fr' ? '6 SEPTEMBRE 2024' : '6 SEPTEMBER 2024'}
          place="Galotti Musikwerkstatt"
          city="Zürich"
        />
      </ul>

      <ul className="Dates-list">
        <h2 className="Dates-list-title">
          {language === 'fr' ? 'On y était' : 'Wir waren dabei'}
        </h2>
        <Date
          date={language === 'fr' ? '20 JUILLET 2024' : '20 JULI 2024'}
          city="Röthenbach Im Emmental"
          event="Vertanzt Festival"
        />
      </ul>
    </section>
  );
};

export default Dates;
