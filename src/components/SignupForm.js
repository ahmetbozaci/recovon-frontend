/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import createUser from '../Redux/Signup/API';
import './style/signup.css';

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    dispatch(createUser(newUser));
  };

  return (
    <Form onSubmit={handleSubmit} className="form m-auto mt-5">
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
        />
      </Form.Group>
      <div className="d-grid gap-2 mt-3">
        <Button variant="primary" size="lg" type="submit">
          Sign Up
        </Button>
      </div>
      <p className="text-muted signin-text">
        <small>
          Already registered
          <Link to="/login" className="signin-link">
            {' '}
            sign in
          </Link>
        </small>
      </p>
    </Form>
  );
};

export default Signup;
