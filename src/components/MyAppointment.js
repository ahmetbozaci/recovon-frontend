import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';
import 'moment-timezone';
import { fetchMyApp, deleteAppointment } from '../Redux/MyApp/myAppActions';
import '../assets/style/myApp.css';

const MyAppointment = () => {
  const myAppData = useSelector((state) => state.myAppReducer.myApp);
  const doctorData = useSelector((state) => state.doctorReducer.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyApp());
  }, []);

  // const handleClick = (id, e) => {
  //   e.preventdefault();
  //   dispatch(deleteAppointment(id));
  // };

  return (
    <div className="p-2 myAppMargin">
      <h1 className="p-2 text-center">My Appointments</h1>
      <div>
        {myAppData
                && myAppData.map((d) => {
                  const { doctor_id: doctorId } = d;
                  const currentDoctor = doctorData.filter((doctor) => doctor.id === doctorId);
                  return (
                    <div className="card mb-3 p-2 ps-lg-5" key={d.id}>
                      <div className="row g-0">
                        <div className="col-md-4 m-auto p-4">
                          <h5>
                            Doctor Name:

                          </h5>
                          <p className="lead">{currentDoctor[0].name}</p>
                          <h5>
                            Location:

                          </h5>
                          <p className="lead">
                            {' '}
                            {currentDoctor[0].location}
                          </p>
                          <h5>
                            Specialty:

                          </h5>
                          <p className="lead">{currentDoctor[0].specification}</p>

                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5>Reservation Date:</h5>
                            <p className="lead">
                              {' '}
                              <small className="text-muted">{d.date}</small>
                            </p>
                            <h5> Reservation Time:</h5>
                            <p className="lead">
                              {' '}
                              <Moment format="HH:MM" className="text-muted">{d.time}</Moment>
                            </p>
<Button
                            onClick={() => {
                              dispatch(fetchMyApp());
                              dispatch(deleteAppointment(d.id));
                              dispatch(fetchMyApp());
                            }}
                            type="submit"
                            className="btn btn-danger"
                          >
                            Cancel

                          </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
      </div>
    </div>

  );
};

export default MyAppointment;
