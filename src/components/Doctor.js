import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../app.css';
import { Carousel } from 'react-bootstrap';
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
    <Carousel>
      {
        data.map((doc) => (
          <div key={doc.id}>
            <Carousel.Item interval={1000} key={doc.id}>
              <img
                className="d-block w-100"
                src={doc.picture}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{doc.name}</h3>
                <p>okok</p>
              </Carousel.Caption>
            </Carousel.Item>
          </div>

        ))
      }

    </Carousel>
  );
};
export default Doctor;
