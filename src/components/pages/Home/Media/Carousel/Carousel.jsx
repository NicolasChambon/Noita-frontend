// Dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';

// Redux actions
import { fetchCarouselPictures } from '../../../../../actions/carouselActions';

// Styles
import 'react-image-gallery/styles/css/image-gallery.css';
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

  const images = pictures.map((picture) => {
    return {
      original: `${import.meta.env.VITE_URL}${picture.url}`,
    };
  });

  return (
    <div className="Carousel">
      <ImageGallery items={images} />
    </div>
  );
};

export default Carousel;
