import { Link } from 'react-router-dom';

import './Dates.scss';

const Dates = () => {
  return (
    <section className="Dates" id="dates">
      <h2 className="Dates-title">Prochaines dates</h2>
      <ul className="Dates-list">
        <li className="Dates-list-item">
          <Link
            className="Dates-list-item-link first"
            to="https://www.vertanzt.ch/fr/"
            target="_blank"
          >
            <div className="Dates-list-item-link-date">19 JUIL. 2024</div>
            <div className="Dates-list-item-link-location">
              <div className="Dates-list-item-link-location-place">
                Parc des spectacles
              </div>
              <div className="Dates-list-item-link-location-city">
                Röthenbach Im Emmental
              </div>
            </div>
            <div className="Dates-list-item-link-location-event">
              Vertanzt Festival
            </div>
          </Link>
        </li>

        <li className="Dates-list-item">
          <Link
            className="Dates-list-item-link"
            to="https://www.vertanzt.ch/fr/"
            target="_blank"
          >
            <div className="Dates-list-item-link-date">19 JUIL. 2024</div>
            <div className="Dates-list-item-link-location">
              <div className="Dates-list-item-link-location-place">
                Parc des spectacles
              </div>
              <div className="Dates-list-item-link-location-city">
                Röthenbach Im Emmental
              </div>
            </div>
            <div className="Dates-list-item-link-location-event">
              Vertanzt Festival
            </div>
          </Link>
        </li>

        <li className="Dates-list-item">
          <Link
            className="Dates-list-item-link"
            to="https://www.vertanzt.ch/fr/"
            target="_blank"
          >
            <div className="Dates-list-item-link-date">19 JUIL. 2024</div>
            <div className="Dates-list-item-link-location">
              <div className="Dates-list-item-link-location-place">
                Parc des spectacles
              </div>
              <div className="Dates-list-item-link-location-city">
                Röthenbach Im Emmental
              </div>
            </div>
            <div className="Dates-list-item-link-location-event">
              Vertanzt Festival
            </div>
          </Link>
        </li>
      </ul>
      <h2 className="Dates-title">Nous y étions</h2>
      <ul className="Dates-list">
        <li className="Dates-list-item">
          <Link
            className="Dates-list-item-link first"
            to="https://www.vertanzt.ch/fr/"
            target="_blank"
          >
            <div className="Dates-list-item-link-date">19 JUIL. 2024</div>
            <div className="Dates-list-item-link-location">
              <div className="Dates-list-item-link-location-place">
                Parc des spectacles
              </div>
              <div className="Dates-list-item-link-location-city">
                Röthenbach Im Emmental
              </div>
            </div>
            <div className="Dates-list-item-link-location-event">
              Vertanzt Festival
            </div>
          </Link>
        </li>

        <li className="Dates-list-item">
          <Link
            className="Dates-list-item-link"
            to="https://www.vertanzt.ch/fr/"
            target="_blank"
          >
            <div className="Dates-list-item-link-date">19 JUIL. 2024</div>
            <div className="Dates-list-item-link-location">
              <div className="Dates-list-item-link-location-place">
                Parc des spectacles
              </div>
              <div className="Dates-list-item-link-location-city">
                Röthenbach Im Emmental
              </div>
            </div>
            <div className="Dates-list-item-link-location-event">
              Vertanzt Festival
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Dates;
