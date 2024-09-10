import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import BoHeader from '../../organisms/BoHeader/BoHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';

import { changeConcertInput } from '../../../actions/concertsActions';

import './BoConcertsForm.scss';

const BoConcertsForm = ({ type, title }) => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.login.isLogged);
  const formInputs = useSelector((state) => state.concerts.form);

  return (
    <>
      <BoHeader />
      <main className="BoConcertsForm">
        <h2 className="BoConcertsForm-title">{title}</h2>
        <form className="BoConcertsForm-form">
          <label htmlFor="city" className="BoConcertsForm-form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            className="BoConcertsForm-form-input"
            placeholder="ex. Andermatt"
            required
            value={formInputs.city}
            onChange={(e) => {
              dispatch(changeConcertInput(e.target.value, 'city'));
            }}
          />
          <label htmlFor="eventDate" className="BoConcertsForm-form-label">
            Event date
          </label>
          <input
            type="date"
            id="eventDate"
            className="BoConcertsForm-form-input"
            required
            value={formInputs.eventDate}
            onChange={(e) => {
              dispatch(changeConcertInput(e.target.value, 'eventDate'));
            }}
          />
          <label htmlFor="Venue" className="BoConcertsForm-form-label">
            Venue
          </label>
          <input
            type="text"
            id="venue"
            className="BoConcertsForm-form-input"
            placeholder="ex. Papiersaal"
            required
          />
          <label htmlFor="eventName" className="BoConcertsForm-form-label">
            Event name
          </label>
          <input
            type="text"
            id="eventName"
            className="BoConcertsForm-form-input"
            placeholder="ex. Vertanzt Festival"
            value={formInputs.eventName}
            onChange={(e) => {
              dispatch(changeConcertInput(e.target.value, 'eventName'));
            }}
          />
          <label htmlFor="link" className="BoConcertsForm-form-label">
            Link
          </label>
          <input
            type="text"
            id="link"
            className="BoConcertsForm-form-input"
            placeholder="ex. https://www.vertanzt.ch/"
            value={formInputs.link}
            onChange={(e) => {
              dispatch(changeConcertInput(e.target.value, 'link'));
            }}
          />
          <button type="submit" className="BoConcertsForm-form-submit">
            Submit
          </button>
        </form>
      </main>
      {!isLogged && <LoginForm />}
    </>
  );
};

BoConcertsForm.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BoConcertsForm;
