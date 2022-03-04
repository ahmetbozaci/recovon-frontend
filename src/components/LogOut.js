import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../Redux/logOut/logOutActions';

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reduxState = useSelector((state) => state.logOutReducer);
  console.log('logout---->', reduxState);

  useEffect(() => {
    if (reduxState.loggedOut === true) {
      navigate('/login');
    }
  }, [reduxState]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logOutUser());
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default LogOut;
