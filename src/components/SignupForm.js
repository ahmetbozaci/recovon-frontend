/** @format */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import createUser from '../Redux/Signup/API';
import '../assets/style/signup.css';

const Signup = () => {
  const status = useSelector((state) => state.signupReducer.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const {
    name, email, password, passwordConfirmation,
  } = state;

  useEffect(() => {
    if (status) {
      navigate('/doctors');
    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const validation = () => {
    const errorMessage = document.getElementById('passwordError');
    if (password !== passwordConfirmation) {
      errorMessage.innerHTML = "Password confirmation doesn't match Password";
    } else if (password.length < 8) {
      errorMessage.innerHTML = 'Password is too short (minimum is 8 characters)';
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    validation();
    dispatch(createUser(newUser));
  };

  return (
    <div className="form-container p-5">
      <Form onSubmit={handleSubmit} className="signUp-form m-auto py-3">
        <h1 className="text-center">Sign Up</h1>
        <Form.Group className="mb-2" controlId="formBasicUsername">
          <Form.Label>
            <h5 className="text-muted">Username</h5>
          </Form.Label>
          <Form.Control
            placeholder="Username"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>
            <h5 className="text-muted">Email address</h5>
          </Form.Label>
          <Form.Control
            placeholder="Enter email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>
            <h5 className="text-muted">Password</h5>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>
            <h5 className="text-muted">Password confirmation</h5>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password again"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted" id="passwordError" />
        </Form.Group>
        <div className="text-center">
          <Button variant="btn btn-primary" size="lg" type="submit">
            Sign Up
          </Button>
        </div>
        <p className="text-muted text-center signin-text">
          <small>
            Already registered
            <Link to="/login" className="signin-link">
              {' '}
              sign in
            </Link>
          </small>
        </p>
      </Form>
    </div>
  );
};
export default Signup;
