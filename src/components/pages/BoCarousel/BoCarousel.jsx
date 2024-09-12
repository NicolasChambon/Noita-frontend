// Dependencies
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import { fetchCarouselPictures } from '../../../actions/carouselActions';

// React-icons
import { LuImagePlus } from 'react-icons/lu';

// Subcomponents
import BoHeader from '../../organisms/BoHeader/BoHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import BoCarouselCard from './BoCarouselCard/BoCarouselCard';
import BoCarouselEmptyCard from './BoCarouselEmptyCard/BoCarouselEmptyCard';

// Styles
import './BoCarousel.scss';

const BoCarousel = () => {
  // Hooks
  const dispatch = useDispatch();

  // Redux state
  const isLogged = useSelector((state) => state.login.isLogged);
  const pictures = useSelector((state) => state.carousel.pictureList);

  // Fetch carousel pictures
  useEffect(() => {
    dispatch(fetchCarouselPictures());
  }, [dispatch]);

  return (
    <>
      <BoHeader />
      <main className="BoCarousel">
        <div className="BoCarousel-cards">
          {pictures &&
            pictures.map((picture) => (
              <BoCarouselCard
                className="BoCarousel-cards-card"
                key={picture.id}
                url={`${import.meta.env.VITE_API_URL}/..${picture.url}`}
              />
            ))}
          <BoCarouselEmptyCard />
        </div>
      </main>
      {!isLogged && <LoginForm />}
    </>
  );
};

export default BoCarousel;
