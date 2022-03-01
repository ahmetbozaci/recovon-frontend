/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import fetchUsers from '../redux/user/userActions';

const UserContainer = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.users);
  console.log('hello from userdata', userData);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <div>hi</div>
      <div>{userData.users.map((user) => <p key={user.id}>{user.name}</p>)}</div>
    </>
  );
//   return userData.loading ? (
//     <h2>Loading</h2>
//   ) : userData.error ? (
//     <h2>{userData.error}</h2>
//   ) : (
//     <div>
//       <h2>User List</h2>
//       <div>
//         {userData
//             && userData.users
//             && userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
//       </div>
//     </div>
//   );
};

// useSelector
// const mapStateToProps = (state) => ({
//   userData: state.userReducer,
// });

// useDispatch
// const mapDispatchToProps = (dispatch) => ({
//   fetchUsers: () => dispatch(fetchUsers()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
export default UserContainer;
