import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import createAppointment from '../Redux/Appointment/API';
import '../assets/style/appointment.css';

const Appointment = () => {
  const dispatch = useDispatch();
  const oneDoctor = useSelector((state) => state.doctorReducer.oneDoctor);
  // console.log('doctor name', oneDoctor[0].name);
  // useEffect(() => oneDoctor[0].name);

  const [state, setState] = useState({
    date: '',
    time: '',
    userID: 1, // current_user
    doctorID: '', // state
  });

  const {
    date, time, userID,
  } = state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAppointment = {
      date,
      time,
      userID,
      doctorID: oneDoctor[0].id,
    };
    dispatch(createAppointment(newAppointment));
  };

  return (
    <Form className="appointmentMargin" onSubmit={handleSubmit}>
      <br />
      <br />
      {/* Disable weekends */}
      <h2 className="pb-3">Fill the form to create your appointment</h2>
      <div>
        {oneDoctor
                && oneDoctor.map((d) => (
                  <h4 key={d.id}>{d.name}</h4>
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
      {/* Disable minutes */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="time"
          onChange={handleChange}
          value={time}
          name="time"
          required
        />
        {/* <Form.Text className="text-muted">
          Choose time 09:00 AM to 05:00 PM
        </Form.Text> */}
      </Form.Group>
      {/* Doctor name will come from state */}
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" disabled value="Doctor name" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Create Appointment
      </Button>
    </Form>
  );
};
export default Appointment;
