import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../Redux/logIn/logInActions';

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutData = useSelector((state) => state.logInReducer);
  console.log('HERE IS MY LOGOUT DATA', logOutData);

  // const reduxState = useSelector((state) => state.logInReducer);

  useEffect(() => {
    if (logOutData.logged_in === false) {
      navigate('/');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logOutUser());
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="btn btn-secondary" type="submit" onClick={handleSubmit}>Logout</button>
    </form>
  );
};

export default LogOut;
