import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './BoHomeBtn.scss';

const BoHomeBtn = ({ title, icon, link }) => {
  return (
    <Link className="BoHomeBtn" to={link}>
      <p className="BoHomeBtn-title">{title}</p>
      <p className="BoHomeBtn-icon">{icon}</p>
    </Link>
  );
};

BoHomeBtn.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};

export default BoHomeBtn;
