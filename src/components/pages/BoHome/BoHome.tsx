// Dependencies
import { useSelector } from 'react-redux';

// Subcomponents
import BoHeader from '../../organisms/BoHeader/BoHeader';
import BoHomeBtn from './BoHomeBtn/BoHomeBtn';
import LoginForm from '../../organisms/LoginForm/LoginForm';

// Types
import { RootState } from '../../../reducers/indexReducer';

// Icons
import { RiCarouselView } from 'react-icons/ri';
import { BsPostcard } from 'react-icons/bs';
import { IoCalendarOutline } from 'react-icons/io5';

// Styles
import './BoHome.scss';

const BoHome = () => {
  const isLogged = useSelector((state: RootState) => state.login.isLogged);

  return (
    <>
      <BoHeader />
      <main className="BoHome">
        <BoHomeBtn
          title="Carousel"
          icon={<RiCarouselView />}
          link="/admin/carousel"
        />
        <BoHomeBtn
          title="Concerts"
          icon={<IoCalendarOutline />}
          link="/admin/concerts"
        />
        <BoHomeBtn title="News" icon={<BsPostcard />} link="/admin/news" />
      </main>
      {!isLogged && <LoginForm />}
    </>
  );
};

export default BoHome;
