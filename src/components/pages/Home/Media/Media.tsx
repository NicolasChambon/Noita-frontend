import Video from './Video/Video';
import Carousel from './Carousel/Carousel';

import './Media.scss';

const Media = () => {
  return (
    <section className="Media" id="media">
      <Video />
      <Carousel />
    </section>
  );
};

export default Media;
