/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInUser } from '../Redux/logIn/logInActions';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reduxState = useSelector((state) => state.logInReducer);
  // console.log('redux state', reduxState);

  useEffect(() => {
    if (reduxState.loggedOut === false) {
      navigate('/doctor');
    }
  }, [reduxState]);

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const exUser = {
      email,
      password,
    };
    dispatch(logInUser(exUser));
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#1266f1' }}>
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Sign in</h3>
                <form onSubmit={handleSubmit}>
                  <label className="form-label">
                    Email Address
                    <input
                      className="form-control form-control-lg"
                      style={{ borderRadius: '1rem' }}
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </label>
                  <input
                    className="form-control form-control-lg"
                    style={{ borderRadius: '1rem' }}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Log In
                  </button>
                </form>
                <div>
                  <p>Or</p>
                  <button type="submit" onClick={() => navigate('/signup')}>
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
