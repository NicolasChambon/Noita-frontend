import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Carousel.scss';

import img1 from '../../../../assets/carousel/noita_vertanzt_1.jpg';
import img2 from '../../../../assets/carousel/noita_vertanzt_2.jpg';
import img3 from '../../../../assets/carousel/noita_vertanzt_3.jpg';
import img4 from '../../../../assets/carousel/noita_vertanzt_4.jpg';
import img5 from '../../../../assets/carousel/noita_vertanzt_5.jpg';
import img6 from '../../../../assets/carousel/noita_vertanzt_6.jpg';

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    className: 'Carousel-slider',
    centerMode: true,
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 1,
    speed: 1000,
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Noita Vertanzt 1" />
        </div>
        <div>
          <img src={img2} alt="Noita Vertanzt 2" />
        </div>
        <div>
          <img src={img3} alt="Noita Vertanzt 3" />
        </div>
        <div>
          <img src={img4} alt="Noita Vertanzt 4" />
        </div>
        <div>
          <img src={img5} alt="Noita Vertanzt 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
