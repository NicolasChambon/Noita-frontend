import { Link } from 'react-router-dom';

import { FiPlusCircle } from 'react-icons/fi';
import { IoIosReturnLeft } from 'react-icons/io';

import './BoNewsFormBtns.scss';

const BoNewsFormBtns = () => {
  return (
    <div className="BoNewsFormBtns">
      <Link to="/admin/news" className="BoNewsFormBtns-return">
        <IoIosReturnLeft className="BoNewsFormBtns-return-icon" />
        <p className="BoNewsFormBtns-return-p">News list</p>
      </Link>

      <button type="submit" className="BoNewsFormBtns-submit">
        <p className="BoNewsFormBtns-submit-p">Submit</p>
        <FiPlusCircle className="BoNewsFormBtns-submit-icon" />
      </button>
    </div>
  );
};

export default BoNewsFormBtns;
