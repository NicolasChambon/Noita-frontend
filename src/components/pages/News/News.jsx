import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { scrollUpInstantly } from '../../../utils/scrollUtils';

import Post from './Post/Post';

import './News.scss';

const News = () => {
  const language = useSelector((state) => state.global.language);

  useEffect(() => {
    scrollUpInstantly();
  }, []);

  return (
    <main className="News">
      <h2 className="News-title">
        {language === 'fr' ? 'Actualités' : 'News'}
      </h2>
      <Post
        title="Vertanzt Festival 2024"
        date={language === 'fr' ? '24 Juillet 2024' : '24 Juli 2024'}
        content={'Bla bliblou gertul til frutctipolstul prost brest dep frulmentoum ti loups linvacat. '.repeat(
          10,
        )}
        urlImage="https://www.vertanzt.ch/wp-content/uploads/Gelaende-in-der-Daemmerung-1-1024x683.jpg"
      />
      <Post
        title="Vertanzt Festival 2024"
        date={language === 'fr' ? '24 Juillet 2024' : '24 Juli 2024'}
        content={'Bla bliblou gertul til frutctipolstul prost brest dep frulmentoum ti loups linvacat. '.repeat(
          10,
        )}
        urlImage="https://www.vertanzt.ch/wp-content/uploads/Gelaende-in-der-Daemmerung-1-1024x683.jpg"
      />
    </main>
  );
};

export default News;
