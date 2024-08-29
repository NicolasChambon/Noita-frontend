import { useEffect } from 'react';

import FullLogo from './FullLogo/FullLogo';
import Identity from './Identity/Identity';
import Media from './Media/Media';
import Dates from './Dates/Dates';
import Contact from './Contact/Contact';

import './Home.scss';

const Home = () => {
  useEffect(() => {
    const page = document.querySelector('.App');
    page.scrollIntoView({
      top: 0,
      left: 0,
    });
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
