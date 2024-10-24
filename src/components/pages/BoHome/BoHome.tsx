import { useSelector } from 'react-redux';

import { RiCarouselView } from 'react-icons/ri';
import { BsPostcard } from 'react-icons/bs';
import { IoCalendarOutline } from 'react-icons/io5';

import BoHeader from '../../organisms/BoHeader/BoHeader';
import BoHomeBtn from './BoHomeBtn/BoHomeBtn';
import LoginForm from '../../organisms/LoginForm/LoginForm';

import './BoHome.scss';

const BoHome = () => {
  const isLogged = useSelector((state) => state.login.isLogged);

  return (
    <>
      <BoHeader />
      <main className="BoHome">
        <BoHomeBtn
          className="BoHome-btn"
          title="Carousel"
          icon={<RiCarouselView />}
          link="/admin/carousel"
        />
        <BoHomeBtn
          className="BoHome-btn"
          title="Concerts"
          icon={<IoCalendarOutline />}
          link="/admin/concerts"
        />
        <BoHomeBtn
          className="BoHome-btn"
          title="News"
          icon={<BsPostcard />}
          link="/admin/news"
        />
      </main>
      {!isLogged && <LoginForm />}
    </>
  );
};

export default BoHome;
