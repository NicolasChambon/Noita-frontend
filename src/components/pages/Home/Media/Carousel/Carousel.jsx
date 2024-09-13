// Dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

// Redux actions
import { fetchCarouselPictures } from '../../../../../actions/carouselActions';

// Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

const Carousel = () => {
  // Hooks
  const dispatch = useDispatch();

  // Redux state
  const pictures = useSelector((state) => state.carousel.pictureList);

  // Fetch carousel pictures
  useEffect(() => {
    dispatch(fetchCarouselPictures());
  }, [dispatch]);

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

  console.log(pictures);

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {pictures &&
          pictures.map((picture) => {
            console.log(`${import.meta.env.VITE_URL}${picture.url}`);
            return (
              <div className="Carousel-slider-card" key={picture.id}>
                <img
                  className="Carousel-slider-card-img"
                  src={`${import.meta.env.VITE_URL}${picture.url}`}
                />
              </div>
            );
          })}
        {/* <div className="Carousel-slider-card">
          <img
            className="Carousel-slider-card-img"
            src={img2}
            alt="Noita Vertanzt 2"
          />
        </div>
        <div className="Carousel-slider-card">
          <img
            className="Carousel-slider-card-img"
            src={img3}
            alt="Noita Vertanzt 3"
          />
        </div>
        <div className="Carousel-slider-card">
          <img
            className="Carousel-slider-card-img"
            src={img4}
            alt="Noita Vertanzt 4"
          />
        </div>
        <div className="Carousel-slider-card">
          <img
            className="Carousel-slider-card-img"
            src={img5}
            alt="Noita Vertanzt 5"
          />
        </div>
        <div className="Carousel-slider-card">
          <img
            className="Carousel-slider-card-img"
            src={img6}
            alt="Noita Vertanzt 6"
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default Carousel;
