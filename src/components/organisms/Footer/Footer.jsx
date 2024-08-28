import FooterTopDivider from './FooterTopDivider/FooterTopDivider';
import FooterLogoSocials from './FooterLogoSocials/FooterLogoSocials';
import FooterNews from './FooterNews/FooterNews';
import FooterNav from './FooterNav/FooterNav';
import FooterBottom from './FooterBottom/FooterBottom';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <FooterTopDivider />

      <div className="Footer-top">
        <FooterLogoSocials />
        <FooterNews />
        <FooterNav />
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
