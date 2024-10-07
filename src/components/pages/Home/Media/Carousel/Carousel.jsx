// Dependencies
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';

// Redux actions
import {
  fetchCarouselPictures,
  // activeOnePicture,
} from '../../../../../actions/carouselActions';

// Components
// import ActivePicture from './ActivePicture/ActivePicture';

// Styles
import 'react-image-gallery/styles/css/image-gallery.css';
import './Carousel.scss';

const Carousel = () => {
  // Hooks
  const dispatch = useDispatch();

  // Redux state
  const pictures = useSelector((state) => state.carousel.pictureList);
  // const activePictureId = useSelector(
  //   (state) => state.carousel.activePictureId,
  // );

  // Local state
  // const [didItDrag, setDidItDrag] = useState(false);

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
      <ImageGallery
        additionalClass="Carousel-slider"
        autoplay={false}
        disableSwipe={true}
        items={images}
        // showPlayButton={false}
        // slideDuration={500}
        slideInterval={500}
        useBrowserFullscreen={false}
      />
    </div>
  );
};

export default Carousel;
