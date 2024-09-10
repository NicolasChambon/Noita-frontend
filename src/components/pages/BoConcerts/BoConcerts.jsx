import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

import {
  fetchConcertList,
  displayRemoveBox,
  hideRemoveBox,
} from '../../../actions/concertsActions';

import BoHeader from '../../organisms/BoHeader/BoHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import ConfirmBox from '../../organisms/ConfirmBox/ConfirmBox';

import './BoConcerts.scss';

const BoConcerts = () => {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.login.isLogged);
  const concerts = useSelector((state) => state.concerts.concertList);
  const isRemoveBoxDisplayed = useSelector(
    (state) => state.concerts.isRemoveBoxDisplayed,
  );
  const removeBoxId = useSelector((state) => state.concerts.removeBoxId);

  useEffect(() => {
    if (isLogged) {
      dispatch(fetchConcertList());
    }
  }, [isLogged, dispatch]);

  // Close confirm box when clicking elsewhere
  useEffect(() => {
    const handleClick = () => {
      if (isRemoveBoxDisplayed) {
        dispatch(hideRemoveBox());
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isRemoveBoxDisplayed, dispatch]);

  return (
    <>
      <BoHeader />
      <main className="BoConcerts">
        <Link className="BoConcerts-add" to="/admin/concerts/add">
          Add concert
        </Link>
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
                    <Link
                      className="BoConcerts-table-body-row-cell actions-btn edit"
                      to={`/admin/concerts/edit/${concert.id}`}
                    >
                      <FaEdit />
                    </Link>
                    <button
                      className="BoConcerts-table-body-row-cell actions-btn remove"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(displayRemoveBox(concert.id));
                      }}
                    >
                      <FaTrashAlt />
                    </button>
                    {isRemoveBoxDisplayed && removeBoxId === concert.id && (
                      <ConfirmBox />
                    )}
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
