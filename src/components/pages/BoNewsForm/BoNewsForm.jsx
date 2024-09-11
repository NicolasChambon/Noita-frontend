// Dependencies
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

// Sub-components
import BoHeader from '../../organisms/BoHeader/BoHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import FailureMessages from '../../organisms/FailureMessages/FailureMessages';
import BoNewsFormBtns from './BoNewsFormBtns/BoNewsFormBtns';
import BoNewsFormImg from './BoNewsFormImg/BoNewsFormImg';

// Actions
import {
  changeNewsInput,
  postAddNewsForm,
  postEditNewsForm,
  newsFailure,
  fetchNewsDetails,
} from '../../../actions/newsActions';

// Styles
import './BoNewsForm.scss';

const BoNewsForm = ({ type, title }) => {
  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Reset the form when we navigate to the form
  useEffect(() => {
    dispatch(changeNewsInput('', 'titleFr'));
    dispatch(changeNewsInput('', 'titleDe'));
    dispatch(changeNewsInput('', 'contentFr'));
    dispatch(changeNewsInput('', 'contentDe'));
    dispatch(changeNewsInput('', 'img64'));
    dispatch(newsFailure([]));
  }, [dispatch]);

  // Redux state
  const isLogged = useSelector((state) => state.login.isLogged);
  const formInputs = useSelector((state) => state.news.form);
  const failureMessages = useSelector((state) => state.news.failureMessages);
  const newsDetails = useSelector((state) => state.news.newsDetails);

  // Search url params to fetch news details for editing
  useEffect(() => {
    if (isLogged && type === 'edit') {
      const url = window.location.href;
      const newsId = url.split('/').pop();
      dispatch(fetchNewsDetails(newsId));
    }
  }, [isLogged, type, dispatch]);

  // Form pre-filling with news details for editing
  useEffect(() => {
    if (type === 'edit' && newsDetails.title_fr) {
      dispatch(changeNewsInput(newsDetails.title_fr, 'titleFr'));
      dispatch(changeNewsInput(newsDetails.title_de, 'titleDe'));
      dispatch(changeNewsInput(newsDetails.content_fr, 'contentFr'));
      dispatch(changeNewsInput(newsDetails.content_de, 'contentDe'));
    }
  }, [type, newsDetails, dispatch]);

  return (
    <>
      <BoHeader />
      <main className="BoNewsForm">
        {type === 'edit' ? (
          <h2 className="BoNewsForm-title">{`${title} : id ${newsDetails.id}`}</h2>
        ) : (
          <h2 className="BoNewsForm-title">{title}</h2>
        )}
        <form
          className="BoNewsForm-form"
          onSubmit={(e) => {
            e.preventDefault();
            type === 'add'
              ? dispatch(postAddNewsForm(navigate))
              : dispatch(postEditNewsForm(navigate));
          }}
        >
          <label htmlFor="titleFr" className="BoNewsForm-form-label">
            French title
          </label>
          <input
            type="text"
            id="titleFr"
            className="BoNewsForm-form-input"
            placeholder="ex. Galotti Bandnacht, on arrive !"
            required
            value={formInputs.titleFr}
            onChange={(e) => {
              dispatch(changeNewsInput(e.target.value, 'titleFr'));
            }}
          />
          <label htmlFor="titleDe" className="BoNewsForm-form-label">
            German title
          </label>
          <input
            type="text"
            id="titleDe"
            className="BoNewsForm-form-input"
            placeholder="ex. Galotti Bandnacht, wir kommen !"
            required
            value={formInputs.titleDe}
            onChange={(e) => {
              dispatch(changeNewsInput(e.target.value, 'titleDe'));
            }}
          />
          <label htmlFor="contentFr" className="BoNewsForm-form-label">
            French content
          </label>
          <textarea
            id="contentFr"
            className="BoNewsForm-form-textarea"
            placeholder="ex. Répétition générale aujourd'hui, il fait chaud..."
            required
            value={formInputs.contentFr}
            onChange={(e) => {
              dispatch(changeNewsInput(e.target.value, 'contentFr'));
            }}
          />
          <label htmlFor="contentDe" className="BoNewsForm-form-label">
            German content
          </label>
          <textarea
            id="contentDe"
            className="BoNewsForm-form-textarea"
            placeholder="ex. Generalprobe heute. Es wird heisst unter der..."
            required
            value={formInputs.contentDe}
            onChange={(e) => {
              dispatch(changeNewsInput(e.target.value, 'contentDe'));
            }}
          />

          <BoNewsFormImg />

          <BoNewsFormBtns />

          {failureMessages.length > 0 && (
            <FailureMessages failureMessages={failureMessages} />
          )}
        </form>
      </main>
      {!isLogged && <LoginForm />}
    </>
  );
};

BoNewsForm.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BoNewsForm;
