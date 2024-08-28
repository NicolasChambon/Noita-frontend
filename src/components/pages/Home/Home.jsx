import FullLogo from './FullLogo/FullLogo';
import Identity from './Identity/Identity';
import Media from './Media/Media';
import Dates from './Dates/Dates';

import './Home.scss';

const Home = () => {
  return (
    <main className="Home">
      <FullLogo />
      <Identity />
      <Media />
      <Dates />
    </main>
  );
};

export default Home;
