import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../app.css';
// import { Carousel } from 'react-bootstrap';

const Doctor = () => {
  const [data, setdata] = useState([]);
  const api = 'https://final-api-55.herokuapp.com/';
  let docdata = '';
  const fetchDoctor = async () => {
    try {
      const response = await axios.get(`${api}`);
      console.log(response.data.users);
      // const datas = await response.data.json();
      docdata = response.data.users;
      console.log(docdata, 'hello na pablo de do us');
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
    <section>
      <div className="row">
        {
          data.map((doc) => {
            console.log(doc, 'hakldfld');
            return (
              <div key={doc.id}>
                <h1>{doc.name}</h1>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};
export default Doctor;
