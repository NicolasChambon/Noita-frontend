import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

import { fetchConcerts } from '../../../actions/concertsActions';

import BoHeader from '../../organisms/BoHeader/BoHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';

import './BoConcerts.scss';

const BoConcerts = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.login.isLogged);
  const concerts = useSelector((state) => state.concerts.concerts);

  useEffect(() => {
    if (isLogged) {
      dispatch(fetchConcerts());
    }
  }, [dispatch, isLogged]);

  return (
    <>
      <BoHeader />
      <main className="BoConcerts">
        <Link className="BoConcerts-add">Add concert</Link>
        <table className="BoConcerts-table">
          <thead className="BoConcerts-table-head">
            <tr className="BoConcerts-table-head-row">
              <th className="BoConcerts-table-head-row-cell">ID</th>
              <th className="BoConcerts-table-head-row-cell">City</th>
              <th className="BoConcerts-table-head-row-cell">Event date</th>
              <th className="BoConcerts-table-head-row-cell">Venue</th>
              <th className="BoConcerts-table-head-row-cell">Event name</th>
              <th className="BoConcerts-table-head-row-cell">Actions</th>
            </tr>
          </thead>
          <tbody className="BoConcerts-table-body">
            {concerts &&
              concerts.map((concert) => (
                <tr key={concert.id} className="BoConcerts-table-body-row">
                  <td className="BoConcerts-table-body-row-cell">
                    {concert.id}
                  </td>
                  <td className="BoConcerts-table-body-row-cell">
                    {concert.city}
                  </td>
                  <td className="BoConcerts-table-body-row-cell">
                    {concert.event_date}
                  </td>
                  <td className="BoConcerts-table-body-row-cell">
                    {concert.venue}
                  </td>
                  <td className="BoConcerts-table-body-row-cell">
                    {concert.event_name}
                  </td>
                  <td className="BoConcerts-table-body-row-cell actions">
                    <Link className="BoConcerts-table-body-row-cell actions-btn edit">
                      <FaEdit />
                    </Link>
                    <button className="BoConcerts-table-body-row-cell actions-btn remove">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
      {!isLogged && <LoginForm />}
    </>
  );
};

export default BoConcerts;
