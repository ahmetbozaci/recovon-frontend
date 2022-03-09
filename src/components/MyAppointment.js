import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';
import { fetchMyApp } from '../Redux/MyApp/myAppActions';
import '../assets/style/myApp.css';
// import fetchDoctor from '../Redux/Doctor/doctorActions';

const MyAppointment = () => {
  const myAppData = useSelector((state) => state.myAppReducer.myApp); // contain doctor_id
  const doctorData = useSelector((state) => state.doctorReducer.doctors); // contain id AS doctor_id
  // console.log('doctor data inside appointment', doctorData);

  // console.log('here is myAppData THE STATE', myAppData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyApp());
  }, []);

  return (
    <div className="p-2 myAppMargin">
      <h1 className="p-2 text-center">My Appointments</h1>
      <div>
        {myAppData
                && myAppData.map((d) => {
                  const { doctor_id: doctorId } = d;
                  const currentDoctor = doctorData.filter((doctor) => doctor.id === doctorId);
                  console.log('here is the current doctor', currentDoctor);
                  console.log('here is a doctor id', doctorId);
                  return (
                    <div className="card mb-3 p-2" key={d.id}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <h4>
                            Doctor Name:
                            {' '}
                            {currentDoctor[0].name}
                          </h4>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            {/* <h5 className="card-title">Card title</h5> */}
                            <p className="card-text" style={{ fontSize: '1.5rem' }}>
                              Reservation Date:
                              {' '}
                              <small className="text-muted">{d.date}</small>
                            </p>
                            <p className="card-text" style={{ fontSize: '1.5rem' }}>
                              Reservation Time:
                              {' '}
                              <Moment format="HH:MM" className="text-muted">{d.time}</Moment>
                            </p>
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
