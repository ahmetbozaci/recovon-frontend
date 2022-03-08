/* eslint-disable max-len */
// import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// import axios from 'axios';
import '../app.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import fetchDoctors from '../Redux/doctor/doctorActions';

// import { Slide } from 'react-slideshow-image';

const Doctor = () => {
  const doctor = useSelector((state) => state.doctorReducer);
  const { doctors } = doctor;
  // const dispatch = useDispatch();
  console.log(doctor);

  if (doctors.length === 0) {
    return (
      <h3>loading....</h3>
    );
  }

  return (
    <Carousel className="caro">
      {
        doctors.map((doc) => (
          <Carousel.Item interval={2000} key={doc.id} className="maincaro">
            <img
              className="docimg"
              src={doc.picture}
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h3 className="docname">
                Dr .
                {doc.name}
              </h3>
              <button className="docbtn" type="button"><Link to="/appointment" className="createapp"> Create-Appointment </Link></button>

            </Carousel.Caption>
          </Carousel.Item>
        ))
      }

    </Carousel>
  );
};
export default Doctor;
