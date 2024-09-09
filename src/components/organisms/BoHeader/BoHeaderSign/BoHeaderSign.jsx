import { useDispatch } from 'react-redux';

import { logout } from '../../../../actions/loginActions';

import { IoMdLogOut } from 'react-icons/io';

import './BoHeaderSign.scss';

const BoHeaderSign = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="BoHeaderSign"
      onClick={() => {
        localStorage.removeItem('token');
        dispatch(logout());
      }}
    >
      <p className="BoHeaderSign-text">Logout</p>
      <IoMdLogOut className="BoHeaderSign-icon" />
    </button>
  );
};

export default BoHeaderSign;
