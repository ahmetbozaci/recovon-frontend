/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchMyApp from '../Redux/MyApp/myAppActions';

const MyAppointment = () => {
  const myAppData = useSelector((state) => state.myAppReducer);
  console.log('here is myAppData THE STATE', myAppData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyApp());
  }, []);

  return myAppData.loading ? (
    <h2>Loading</h2>
  ) : myAppData.error ? (
    <h2>{myAppData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {myAppData
                && myAppData.myApp
                && myAppData.myApp.map((x) => <p key={x.id}>{x.date}</p>)}
      </div>
    </div>

  );
};

export default MyAppointment;
