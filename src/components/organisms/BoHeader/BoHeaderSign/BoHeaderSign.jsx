import { IoMdLogOut } from 'react-icons/io';

import './BoHeaderSign.scss';

const BoHeaderSign = () => {
  return (
    <button className="BoHeaderSign">
      <p className="BoHeaderSign-text">Logout</p>
      <IoMdLogOut className="BoHeaderSign-icon" />
    </button>
  );
};

export default BoHeaderSign;
