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
      <h1>loading</h1>
    );
  }

  return (
    <div className="picside">
      {
        data.map((doc) => (
          <div className="carousel-inner picside" key={doc.id}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="docpicture"
                  src={doc.picture}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="docname" style={{ color: 'blue' }}>
                    Dr .
                    {' '}
                    {doc.name}
                  </h3>
                  <button classsName="cbtn" type="button">Create-appointment</button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        ))
      }

    </div>
  );
};
export default Doctor;
