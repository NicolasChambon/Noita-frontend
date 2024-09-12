// Dependencies
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import { fetchCarouselPictures } from '../../../actions/carouselActions';

// Subcomponents
import BoHeader from '../../organisms/BoHeader/BoHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';

// Styles
import './BoCarousel.scss';

const BoCarousel = () => {
  // Hooks
  const dispatch = useDispatch();

  // Redux state
  const isLogged = useSelector((state) => state.login.isLogged);
  const pictures = useSelector((state) => state.carousel.pictures);

  // Fetch carousel pictures
  useEffect(() => {
    dispatch(fetchCarouselPictures());
  }, [dispatch]);

  return (
    <>
      <BoHeader />
      <main className="BoCarousel">carousel</main>
      {!isLogged && <LoginForm />}
    </>
  );
};

export default BoCarousel;
