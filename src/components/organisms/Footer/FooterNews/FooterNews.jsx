import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './FooterNews.scss';

const FooterNews = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="FooterNews">
      <Link className="FooterNews-link">
        <h4 className="FooterNews-link-title">
          {language === 'fr' ? 'Actualités' : 'Nachrichten'}
        </h4>
      </Link>
      <p className="FooterNews-text">
        {language === 'fr'
          ? 'Restez informé des dernières actualités du groupe.'
          : 'Bleiben Sie über die neuesten Nachrichten der Gruppe informiert.'}
      </p>
    </div>
  );
};

export default FooterNews;
