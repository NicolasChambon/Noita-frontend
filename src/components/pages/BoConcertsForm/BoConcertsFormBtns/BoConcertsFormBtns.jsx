import { Link } from 'react-router-dom';

import { FiPlusCircle } from 'react-icons/fi';
import { IoIosReturnLeft } from 'react-icons/io';

import './BoConcertsFormBtns.scss';

const BoConcertsFormBtns = () => {
  return (
    <div className="BoConcertsFormBtns">
      <Link to="/admin/concerts" className="BoConcertsFormBtns-return">
        <IoIosReturnLeft className="BoConcertsFormBtns-return-icon" />
        <p className="BoConcertsFormBtns-return-p">Concert list</p>
      </Link>

      <button type="submit" className="BoConcertsFormBtns-submit">
        <p className="BoConcertsFormBtns-submit-p">Submit</p>
        <FiPlusCircle className="BoConcertsFormBtns-submit-icon" />
      </button>
    </div>
  );
};

export default BoConcertsFormBtns;
