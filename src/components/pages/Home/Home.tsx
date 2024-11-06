// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Actions
import { setTargetSection } from '../../../actions/global/globalActions';
import { scrollUpInstantly, scrollToSection } from '../../../utils/scrollUtils';

// Types
import { RootState } from '../../../reducers/indexReducer';
import { AppDispatch } from '../../../store';

// Components
import Header from '../../organisms/Header/Header';
import FullLogo from './FullLogo/FullLogo';
import Identity from './Identity/Identity';
import Media from './Media/Media';
import Dates from './Dates/Dates';
import Contact from './Contact/Contact';
import Footer from '../../organisms/Footer/Footer';

// Styles
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const targetSection = useSelector(
    (state: RootState) => state.global.targetSection,
  );

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
    <>
      <Header />
      <main className="Home">
        <FullLogo />
        <Identity />
        <Media />
        <Dates />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
