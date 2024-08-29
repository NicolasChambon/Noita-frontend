import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { scrollIfOnSamePage } from '../../../../utils/scrollUtils';

import './FooterNews.scss';

const FooterNews = () => {
  const language = useSelector((state) => state.global.language);

  return (
    <div className="FooterNews">
      <Link
        className="FooterNews-link"
        to="/news"
        onClick={() => {
          scrollIfOnSamePage('/news');
        }}
      >
        <h4 className="FooterNews-link-title">
          {language === 'fr' ? 'Actualités' : 'News'}
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
