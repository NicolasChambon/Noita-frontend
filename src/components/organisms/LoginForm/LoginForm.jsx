import './LoginForm.scss';

const LoginForm = () => {
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
          />
          <label htmlFor="password" className="LoginForm-wrapper-form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="LoginForm-wrapper-form-input"
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
