import { useSelector } from 'react-redux';
import '../assets/style/doctor.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = () => {
  const doctor = useSelector((state) => state.doctorReducer);
  const { doctors } = doctor;

  if (doctors.length === 0) {
    return (
      <h3>....</h3>
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
