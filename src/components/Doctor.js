/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import axios from 'axios';
import '../app.css';
// import { Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import fetchDoctors from '../Redux/doctor/doctorActions';

// import { Slide } from 'react-slideshow-image';

const Doctor = () => {
  const doctor = useSelector((state) => state.doctorReducer);
  const dispatch = useDispatch();
  console.log(doctor);
  // const [data, setdata] = useState([]);
  // const api = 'https://final-api-55.herokuapp.com/doctors';
  // let docdata = '';
  // const fetchDoctor = async () => {
  //   try {
  //     const response = await axios.get(`${api}`);
  //     console.log(response.data);
  //     // const datas = await response.data.json();
  //     docdata = response.data;
  //     setdata(docdata);
  //   } catch (e) {
  //     throw e.toString();
  //   }
  // };
  useEffect(() => {
    dispatch(fetchDoctors);
  }, []);
  //   fetchDoctor();
  // }, []);
  // if (data.length === 0) {
  //   return (
  //     <h3>loading...</h3>
  //   );
  // }

  return (
    <div className="hello" />
    // <Carousel className="caro">
    //   {
    //     data.map((doc) => (
    //       <Carousel.Item interval={2000} key={doc.id} className="maincaro">
    //         <img
    //           className="docimg"
    //           src={doc.picture}
    //           alt="First slide"
    //         />
    //         <Carousel.Caption className="caption">
    //           <h3 className="docname">
    //             Dr .
    //             {doc.name}
    //           </h3>
    //           <button className="docbtn" type="button"><Link to="AA" className="createapp"> Create-Appointment </Link></button>

  //         </Carousel.Caption>
  //       </Carousel.Item>
  //     ))
  //   }

  // </Carousel>
  );
};
export default Doctor;
