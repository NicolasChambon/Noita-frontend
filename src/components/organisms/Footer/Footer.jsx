import FooterTopDivider from './FooterTopDivider/FooterTopDivider';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <FooterTopDivider />
      <div className="Footer-content">
        <p className="Footer-content-item">Noïta © 2021</p>
        <p className="Footer-content-item">Crédits</p>
      </div>
    </footer>
  );
};

export default Footer;
