/** @format */

import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Appointment = () => (
  <Form>
    <br />
    <br />
    {/* Disable weekends */}
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Enter Appointment Date </Form.Label>
      <Form.Control type="date" min={Date.now()} required />
    </Form.Group>
    {/* Disable minutes */}
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Appointment Date</Form.Label>
      <Form.Control type="time" step="" min="09:00" max="17:00" required />
      <Form.Text className="text-muted">
        Choose time 09:00 AM to 05:00 PM
      </Form.Text>
    </Form.Group>
    <Button variant="primary" type="submit">
      Create Appointment
    </Button>
  </Form>
);

export default Appointment;
