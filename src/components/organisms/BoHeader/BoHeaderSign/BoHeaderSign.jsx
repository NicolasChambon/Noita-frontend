import { IoMdLogIn } from 'react-icons/io';
import { IoMdLogOut } from 'react-icons/io';

import './BoHeaderSign.scss';

const BoHeaderSign = () => {
  return (
    <button className="BoHeaderSign">
      <p className="BoHeaderSign-text">Login</p>
      <IoMdLogIn className="BoHeaderSign-icon" />
    </button>
  );
};

export default BoHeaderSign;
