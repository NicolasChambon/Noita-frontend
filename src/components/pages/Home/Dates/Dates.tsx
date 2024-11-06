// Dependencies
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import { fetchConcertList } from '../../../../actions/concert/concertsActions';

// Types
import { RootState } from '../../../../reducers/indexReducer';
import { AppDispatch } from '../../../../store';

// Subcomponents
import ConcertDate from './ConcertDate/ConcertDate';

// Styles
import './Dates.scss';

const Dates = () => {
  // Hooks
  const dispatch = useDispatch<AppDispatch>();

  // Redux state
  const language = useSelector((state: RootState) => state.global.language);
  const concerts = useSelector(
    (state: RootState) => state.concerts.concertList,
  );

  // Fetch concert list
  useEffect(() => {
    dispatch(fetchConcertList());
  }, [dispatch]);

  // Sort concerts in 2 arrays: upcoming and past
  const upcomingConcerts = concerts.filter((concert) => {
    const concertDate = new Date(concert.event_date);
    return concertDate > new Date();
  });
  const pastConcerts = concerts.filter((concert) => {
    const concertDate = new Date(concert.event_date);
    return concertDate < new Date();
  });

  return (
    <section className="Dates" id="dates">
      <ul className="Dates-list">
        <h2 className="Dates-list-title">
          {language === 'fr' ? 'On y sera' : 'Wir kommen'}
        </h2>
        {upcomingConcerts.length === 0 && (
          <p className="Dates-list-no">
            {language === 'fr'
              ? 'Bientôt de nouvelles dates...'
              : 'Bald neue Daten...'}
          </p>
        )}
        {upcomingConcerts.map((concert) => (
          <ConcertDate
            key={concert.id}
            date={concert.event_date}
            place={concert.venue}
            city={concert.city}
            event={concert.event_name}
            link={concert.event_url}
          />
        ))}
      </ul>

      <ul className="Dates-list">
        <h2 className="Dates-list-title">
          {language === 'fr' ? 'On y était' : 'Wir waren da'}
        </h2>
        {pastConcerts.map((concert) => (
          <ConcertDate
            key={concert.id}
            date={concert.event_date}
            place={concert.venue}
            city={concert.city}
            event={concert.event_name}
            link={concert.event_url}
          />
        ))}
      </ul>
    </section>
  );
};

export default Dates;
