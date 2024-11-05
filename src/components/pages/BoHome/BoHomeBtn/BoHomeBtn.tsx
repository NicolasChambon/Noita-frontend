import { Link } from 'react-router-dom';

import './BoHomeBtn.scss';

const BoHomeBtn: (props: {
  title: string;
  icon: JSX.Element;
  link: string;
}) => JSX.Element = ({ title, icon, link }) => {
  return (
    <Link className="BoHomeBtn" to={link}>
      <p className="BoHomeBtn-title">{title}</p>
      <p className="BoHomeBtn-icon">{icon}</p>
    </Link>
  );
};

export default BoHomeBtn;
