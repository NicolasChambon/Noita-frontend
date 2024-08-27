import FullLogo from './FullLogo/FullLogo';
import Identity from './Identity/Identity';
import Video from './Video/Video';
import Dates from './Dates/Dates';

import './Home.scss';

const Home = () => {
  return (
    <main className="Home">
      <FullLogo />
      <Identity />
      <Video />
      <Dates />
    </main>
  );
};

export default Home;
