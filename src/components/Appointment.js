import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Appointment = () => (
  <Form>
    <br />
    <br />
    {/* Disable weekends */}
    <h1>Appointment</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="date" min={Date.now()} required />
    </Form.Group>
    {/* Disable minutes */}
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="time" step="" min="09:00" max="17:00" required />
      <Form.Text className="text-muted">
        Choose time 09:00 AM to 05:00 PM
      </Form.Text>
    </Form.Group>
    {/* Doctor name will come from state */}
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="text" disabled value="Doctor Name" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Create Appointment
    </Button>
  </Form>
);

export default Appointment;
