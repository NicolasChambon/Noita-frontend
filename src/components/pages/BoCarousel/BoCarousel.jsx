// Dependencies
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import { fetchCarouselPictures } from '../../../actions/carouselActions';

// Subcomponents
import BoHeader from '../../organisms/BoHeader/BoHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import BoCarouselCard from './BoCarouselCard/BoCarouselCard';
import BoCarouselEmptyCard from './BoCarouselEmptyCard/BoCarouselEmptyCard';
import FailureMessages from '../../organisms/FailureMessages/FailureMessages';

// Styles
import './BoCarousel.scss';

const BoCarousel = () => {
  // Hooks
  const dispatch = useDispatch();

  // Redux state
  const isLogged = useSelector((state) => state.login.isLogged);
  const pictures = useSelector((state) => state.carousel.pictureList);
  const failureMessages = useSelector(
    (state) => state.carousel.failureMessages,
  );

  // Fetch carousel pictures
  useEffect(() => {
    dispatch(fetchCarouselPictures());
  }, [dispatch]);

  return (
    <>
      <BoHeader />
      <main className="BoCarousel">
        {failureMessages.length > 0 && (
          <FailureMessages failureMessages={failureMessages} />
        )}
        <div className="BoCarousel-cards">
          {pictures &&
            pictures.map((picture) => (
              <BoCarouselCard
                className="BoCarousel-cards-card"
                key={picture.id}
                id={picture.id}
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
