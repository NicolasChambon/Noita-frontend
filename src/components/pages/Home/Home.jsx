import FullLogo from './FullLogo/FullLogo';
import Identity from './Identity/Identity';
import Video from './Video/Video';
import Dates from './Dates/Dates';
import Carousel from './Carousel/Carousel';

import './Home.scss';

const Home = () => {
  return (
    <main className="Home">
      <FullLogo />
      <Identity />
      <div className="Home-media" id="media">
        <Video />
        <Carousel />
      </div>
      <Dates />
    </main>
  );
};

export default Home;
