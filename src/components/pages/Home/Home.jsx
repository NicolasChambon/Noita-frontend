import { useEffect } from 'react';

import { scrollUpInstantly } from '../../../utils/scrollUtils';

import FullLogo from './FullLogo/FullLogo';
import Identity from './Identity/Identity';
import Media from './Media/Media';
import Dates from './Dates/Dates';
import Contact from './Contact/Contact';

import './Home.scss';

const Home = () => {
  useEffect(() => {
    scrollUpInstantly();
  }, []);

  return (
    <main className="Home">
      <FullLogo />
      <Identity />
      <Media />
      <Dates />
      <Contact />
    </main>
  );
};

export default Home;
