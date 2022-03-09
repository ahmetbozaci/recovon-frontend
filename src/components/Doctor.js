/** @format */

import { useSelector, useDispatch } from 'react-redux';
import '../assets/style/doctor.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchOneDoctor } from '../Redux/doctor/doctorActions';

const Doctor = () => {
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctorReducer);
  const { doctors } = doctor;

  if (doctors.length === 0) {
    return <h3>....</h3>;
  }

  const handleClick = (event) => {
    const { id } = event.target;
    dispatch(fetchOneDoctor(id));
  };

  return (
    <Carousel className="caro doctorMargin">
      {doctors.map((doc) => (
        <Carousel.Item interval={2000} key={doc.id} className="maincaro">
          <img className="docimg" src={doc.picture} alt="First slide" />
          <Carousel.Caption className="caption">
            <h3 className="docname">
              Dr .
              {doc.name}
            </h3>
            <button className="docbtn" type="button" onClick={handleClick}>
              <Link to="/appointment" className="createapp" id={doc.id}>
                {' '}
                Create-Appointment
              </Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default Doctor;
