import { RiCarouselView } from 'react-icons/ri';
import { BsPostcard } from 'react-icons/bs';
import { IoCalendarOutline } from 'react-icons/io5';

import BoHeader from '../../organisms/BoHeader/BoHeader';
import BoHomeBtn from './BoHomeBtn/BoHomeBtn';

import './BoHome.scss';

const BoHome = () => {
  return (
    <>
      <BoHeader />
      <main className="BoHome">
        <BoHomeBtn
          className="BoHome-btn"
          title="Carousel"
          icon={<RiCarouselView />}
        />
        <BoHomeBtn
          className="BoHome-btn"
          title="Concerts"
          icon={<BsPostcard />}
        />
        <BoHomeBtn
          className="BoHome-btn"
          title="Events"
          icon={<IoCalendarOutline />}
        />
      </main>
    </>
  );
};

export default BoHome;
