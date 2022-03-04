/* eslint-disable no-lone-blocks */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUsers from '../Redux/user/userActions';

function UserContainer() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData
              && userData.users
              && userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
}

// useSelector
// const mapStateToProps = (state) => ({
//   userData: state.user,
// });

// useDispatch
// const mapDispatchToProps = (dispatch) => ({
//   fetchUsers: () => dispatch(fetchUsers()),
// });

export default UserContainer;

{ /* <div>
<div>
  <h1>MyAppointment</h1>
</div>
<div>
  <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <h3>hi </h3>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */ }
