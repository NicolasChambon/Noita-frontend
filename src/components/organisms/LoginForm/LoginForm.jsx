import { useDispatch, useSelector } from 'react-redux';

import { changeLoginInput } from '../../../actions/loginActions';

import './LoginForm.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  return (
    <div className="LoginForm">
      <div className="LoginForm-wrapper">
        <h2 className="LoginForm-wrapper-title">Login</h2>
        <form className="LoginForm-wrapper-form">
          <label htmlFor="username" className="LoginForm-wrapper-form-label">
            Username
          </label>
          <input
            type="username"
            id="username"
            className="LoginForm-wrapper-form-input"
            value={login.usernameInput}
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
            onChange={(e) =>
              dispatch(changeLoginInput(e.target.value, 'passwordInput'))
            }
          />
          <button type="submit" className="LoginForm-wrapper-form-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
