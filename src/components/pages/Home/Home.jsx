import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { setTargetSection } from '../../../actions/globalActions';
import { scrollUpInstantly, scrollToSection } from '../../../utils/scrollUtils';

import FullLogo from './FullLogo/FullLogo';
import Identity from './Identity/Identity';
import Media from './Media/Media';
import Dates from './Dates/Dates';
import Contact from './Contact/Contact';

import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const targetSection = useSelector((state) => state.global.targetSection);

  useEffect(() => {
    scrollUpInstantly();
  }, []);

  useEffect(() => {
    if (targetSection) {
      scrollToSection(targetSection);
      dispatch(setTargetSection(''));
    }
  }, [targetSection, dispatch]);

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
