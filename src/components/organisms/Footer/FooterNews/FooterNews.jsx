import { Link } from 'react-router-dom';

import './FooterNews.scss';

const FooterNews = () => {
  return (
    <div className="FooterNews">
      <Link className="FooterNews-link">
        <h4 className="FooterNews-link-title">Actualités</h4>
      </Link>
      <p className="FooterNews-text">
        Suivez les dernières nouvelles du groupe.
      </p>
    </div>
  );
};

export default FooterNews;
