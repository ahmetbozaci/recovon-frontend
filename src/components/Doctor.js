/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import axios from 'axios';
import '../app.css';
import { Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import fetchDoctors from '../Redux/doctor/doctorActions';

// import { Slide } from 'react-slideshow-image';

const Doctor = () => {
  const doctor = useSelector((state) => state.doctorReducer);
  const dispatch = useDispatch();
  console.log(doctor);

  if (doctor.length === 0) {
    return (
      <h3>loading....</h3>
    );
  }

  return (
    {
     doctors.map((doc)=>{
       return(
         <div key={doc.id}>
         </div>
       )
     })
    }

  )
};
export default Doctor;
