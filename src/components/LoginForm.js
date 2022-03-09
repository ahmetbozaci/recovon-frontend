import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logInUser } from '../Redux/logIn/logInActions';
import '../assets/style/login.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const reduxState = useSelector((state) => state.logInReducer);

  // useEffect(() => {
  //   if (reduxState.loggedOut === false) {
  //     navigate('/doctor');
  //   }
  // }, [reduxState]);

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
    <section className="vh-100" style={{ backgroundColor: 'white' }}>
      <div className="container py-3 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 signIn" style={{ backgroundColor: 'rgb(127, 214, 255)' }}>
                <h1 className="mb-5 text-center">Sign in</h1>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <p htmlFor="exampleInputEmail1" className="form-label text-left">Email address</p>
                    <input
                      className="form-control"
                      id="exampleInputEmail1"
                      style={{ borderRadius: '1rem' }}
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <p htmlFor="exampleInputPassword1" className="form-label">Password</p>
                    <input
                      className="form-control"
                      style={{ borderRadius: '1rem' }}
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => navigate('/doctor')}
                    >
                      Log In
                    </button>
                  </div>
                </form>

                <div className="text-center">
                  <div className="text-secondary pt-3 signIn-text">
                    You do not have an account ? Please
                    {' '}
                    { ' ' }
                    <Link
                      to="/signup"
                      className="text-primary"
                      type="submit"
                    >
                      Sign up
                    </Link>
                  </div>
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
