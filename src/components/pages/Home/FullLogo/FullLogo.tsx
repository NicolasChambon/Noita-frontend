// Component
import FullLogoBottomDivider from './FullLogoBottomDivider/FullLogoBottomDivider';

// Logos
import moonLandscape from '../../../../assets/images/noita-fullmoon.jpg';
import noitaTextLogo from '../../../../assets/logos/noita-text-logo-white.svg';

// Styles
import './FullLogo.scss';

const FullLogo = () => {
  return (
    <section className="FullLogo">
      <img className="FullLogo-img" src={moonLandscape} alt="moon landscape" />
      <img
        className="FullLogo-textLogo"
        src={noitaTextLogo}
        alt="Noita text logo"
      />
      <FullLogoBottomDivider />
    </section>
  );
};

export default FullLogo;
