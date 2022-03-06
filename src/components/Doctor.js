import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../app.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import { Slide } from 'react-slideshow-image';

const Doctor = () => {
  const [data, setdata] = useState([]);
  const api = 'https://final-api-55.herokuapp.com/doctors';
  let docdata = '';
  const fetchDoctor = async () => {
    try {
      const response = await axios.get(`${api}`);
      console.log(response.data);
      // const datas = await response.data.json();
      docdata = response.data;
      setdata(docdata);
    } catch (e) {
      throw e.toString();
    }
  };
  useEffect(() => {
    fetchDoctor();
  }, []);
  if (data.length === 0) {
    return (
      <h3>loading...</h3>
    );
  }

  return (
    <Carousel className="caro">
      {
        data.map((doc) => (
          <Carousel.Item interval={2000} key={doc.id}>
            <img
              className="docimg"
              src={doc.picture}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="docname">
                Dr .
                {doc.name}
              </h3>
              <button className="docbtn" type="button"><Link to="AA" className="createapp"> Create-Appointment </Link></button>

            </Carousel.Caption>
          </Carousel.Item>
        ))
      }

    </Carousel>
  );
};
export default Doctor;
