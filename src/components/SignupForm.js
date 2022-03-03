import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/Signup/API';

const Signup = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: '',
  });

  const {
    name, email, password, passwordConfirmation,
  } = state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          placeholder="password confirmation"
          type="password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
