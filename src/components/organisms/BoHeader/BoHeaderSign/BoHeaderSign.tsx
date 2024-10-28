import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logout } from '../../../../actions/login/loginActions';

import { IoMdLogOut } from 'react-icons/io';

import './BoHeaderSign.scss';

const BoHeaderSign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <button
      className="BoHeaderSign"
      onClick={() => {
        dispatch(logout());
        navigate('/admin');
      }}
    >
      <p className="BoHeaderSign-text">Logout</p>
      <IoMdLogOut className="BoHeaderSign-icon" />
    </button>
  );
};

export default BoHeaderSign;
