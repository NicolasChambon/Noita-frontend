import FullLogoBottomDivider from './FullLogoBottomDivider/FullLogoBottomDivider';

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
      <FullLogoBottomDivider />
    </div>
  );
};

export default FullLogo;
