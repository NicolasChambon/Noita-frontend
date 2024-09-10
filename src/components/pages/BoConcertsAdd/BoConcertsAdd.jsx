import { useSelector } from 'react-redux';

import BoHeader from '../../organisms/BoHeader/BoHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';

import './BoConcertsAdd.scss';

const BoConcertsAdd = () => {
  const isLogged = useSelector((state) => state.login.isLogged);

  return (
    <>
      <BoHeader />
      <main className="BoConcertsAdd">
        <h2 className="BoConcertsAdd-title">Add concert</h2>
        <form className="BoConcertsAdd-form">
          <label htmlFor="city" className="BoConcertsAdd-form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            className="BoConcertsAdd-form-input"
            required
          />
          <label htmlFor="eventDate" className="BoConcertsAdd-form-label">
            Event date
          </label>
          <input
            type="date"
            id="eventDate"
            className="BoConcertsAdd-form-input"
            required
          />
          <label htmlFor="Venue" className="BoConcertsAdd-form-label">
            Venue
          </label>
          <input type="text" id="venue" className="BoConcertsAdd-form-input" />
          <label htmlFor="eventName" className="BoConcertsAdd-form-label">
            Event name
          </label>
          <input
            type="text"
            id="eventName"
            className="BoConcertsAdd-form-input"
          />
          <label htmlFor="link" className="BoConcertsAdd-form-label">
            Link
          </label>
          <input type="text" id="link" className="BoConcertsAdd-form-input" />
          <button type="submit" className="BoConcertsAdd-form-submit">
            Submit
          </button>
        </form>
      </main>
      {!isLogged && <LoginForm />}
    </>
  );
};

export default BoConcertsAdd;
