import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../Redux/logOut/logOutActions';

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.logOutReducer);
  // console.log('useSelector logout state', state);
  const { loggedOut } = state;

  useEffect(() => {
    if (loggedOut) {
      navigate('/login');
    }
  }, [loggedOut]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logOutUser());
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" onClick={handleSubmit}>Logout</button>
    </form>
  );
};

export default LogOut;
