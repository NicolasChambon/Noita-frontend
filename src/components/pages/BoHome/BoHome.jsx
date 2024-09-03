import { useSelector } from 'react-redux';

import { RiCarouselView } from 'react-icons/ri';
import { BsPostcard } from 'react-icons/bs';
import { IoCalendarOutline } from 'react-icons/io5';

import BoHeader from '../../organisms/BoHeader/BoHeader';
import BoHomeBtn from './BoHomeBtn/BoHomeBtn';
import LoginForm from '../../organisms/LoginForm/LoginForm';

import './BoHome.scss';

const BoHome = () => {
  const isLogged = useSelector((state) => state.admin.isLogged);

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
          icon={<BsPostcard />}
          link="/admin/concerts"
        />
        <BoHomeBtn
          className="BoHome-btn"
          title="Events"
          icon={<IoCalendarOutline />}
          link="/admin/events"
        />
      </main>
      {!isLogged && <LoginForm />}
    </>
  );
};

export default BoHome;
