import BottomDivider from './BottomDivider/BottomDivider';

import moonLandscape from '../../../../assets/images/noita-fullmoon.jpg';
import noitaTextLogo from '../../../../assets/logos/noita-text-logo-white.svg';

import './FullLogo.scss';

const FullLogo = () => {
  return (
    <div className="FullLogo">
      <img className="FullLogo-img" src={moonLandscape} alt="moon landscape" />
      <img
        className="FullLogo-textLogo"
        src={noitaTextLogo}
        alt="Noita text logo"
      />
      <BottomDivider />
    </div>
  );
};

export default FullLogo;
