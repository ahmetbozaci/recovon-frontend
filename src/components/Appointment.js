import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import createAppointment from '../Redux/Appointment/API';
import '../assets/style/appointment.css';

const Appointment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const oneDoctor = useSelector((state) => state.doctorReducer.oneDoctor);

  const [state, setState] = useState({
    date: '',
    time: '',
    userID: '',
    doctorID: '',
    status: false,
  });

  const { date, time, status } = state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAppointment = {
      date,
      time,
      userID: localStorage.getItem('currentUserId'),
      doctorID: oneDoctor[0].id,
    };
    dispatch(createAppointment(newAppointment));
    setState({ ...state, status: true });
  };

  useEffect(() => {
    if (status) {
      navigate('/myappointments');
      setState({ ...state, status: false });
    }
  });

  return (
    <Form className="appointmentMargin" onSubmit={handleSubmit}>
      <br />
      <br />
      <h2 className="pb-3">Fill the form to create your appointment</h2>
      <div>
        {oneDoctor && oneDoctor.map((d) => (
          <h4 key={d.id}>
            Dr .
            {' '}
            {d.name}
          </h4>
        ))}
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="date"
          onChange={handleChange}
          value={date}
          name="date"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="time"
          onChange={handleChange}
          value={time}
          name="time"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Appointment
      </Button>
    </Form>
  );
};
export default Appointment;
