import React from 'react';
import '../app.css';
import { Carousel } from 'react-bootstrap';

const Doctor = () => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d- w-35"
          src="logo512.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: 'blue' }}>Doctors nam</h3>
          <button type="button">Create-appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d- w-35"
          src="logo512.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: 'blue' }}>Doctors nam</h3>
          <button type="button">Create-appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d- w-35"
          src="logo512.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: 'blue' }}>Doctors nam</h3>
          <button type="button">Create-appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d- w-35"
          src="logo512.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: 'blue' }}>Doctors name</h3>
          <button type="button">Create-appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d- w-35"
          src="logo512.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: 'blue' }}>Doctors name</h3>
          <button type="button">Create-appointment</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Doctor;
