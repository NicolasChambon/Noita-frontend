// Dependencies
import { useDispatch, useSelector } from 'react-redux';

// Actions
import {
  changeLoginInput,
  postLoginForm,
} from '../../../actions/login/loginActions';

// Types
import { RootState } from '../../../reducers/indexReducer';
import { AppDispatch } from '../../../store';

// Components
import FailureMessages from '../FailureMessages/FailureMessages';

// Styles
import './LoginForm.scss';

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const login = useSelector((state: RootState) => state.login);
  const failureMessages = useSelector(
    (state: RootState) => state.login.failureMessages,
  );

  return (
    <div className="LoginForm">
      <div className="LoginForm-wrapper">
        <h2 className="LoginForm-wrapper-title">Login</h2>
        <form
          className="LoginForm-wrapper-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(postLoginForm());
          }}
        >
          <label htmlFor="username" className="LoginForm-wrapper-form-label">
            Username
          </label>
          <input
            type="username"
            id="username"
            className="LoginForm-wrapper-form-input"
            value={login.usernameInput}
            // required
            onChange={(e) =>
              dispatch(changeLoginInput(e.target.value, 'usernameInput'))
            }
          />
          <label htmlFor="password" className="LoginForm-wrapper-form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="LoginForm-wrapper-form-input"
            value={login.passwordInput}
            // required
            onChange={(e) =>
              dispatch(changeLoginInput(e.target.value, 'passwordInput'))
            }
          />
          <button type="submit" className="LoginForm-wrapper-form-submit">
            Submit
          </button>
          {failureMessages.length > 0 && (
            <FailureMessages failureMessages={failureMessages} />
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
