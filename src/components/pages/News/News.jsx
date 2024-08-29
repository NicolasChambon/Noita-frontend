import { useEffect } from 'react';

import './News.scss';

const News = () => {
  useEffect(() => {
    const page = document.querySelector('.App');
    page.scrollIntoView({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <main className="News">
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs News coucou les newseurs News coucou les newseurs
      News coucou les newseurs{' '}
    </main>
  );
};

export default News;
