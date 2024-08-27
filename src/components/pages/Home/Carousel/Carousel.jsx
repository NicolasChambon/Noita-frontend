import ReactPlayer from 'react-player';

import './Carousel.scss';

const Carousel = () => {
  return (
    <div className="Carousel">
      <ReactPlayer
        className="Carousel-player"
        url="https://www.youtube.com/embed/djUySOtNbj8"
        width="100%"
        height="100%"
        controls={true}
        light={false}
        playing={false}
      />
    </div>
  );
};

export default Carousel;
