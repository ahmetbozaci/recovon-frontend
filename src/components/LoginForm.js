import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  // const {
  //   email, password,
  // } = state;

  return (
    <div>
      <h1>Logo</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
      <div>
        <p>Or</p>
        <button type="submit" onClick={() => navigate('/signup')}>Sign up</button>
      </div>
    </div>
  );
};

export default LoginForm;
