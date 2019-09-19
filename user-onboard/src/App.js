import React from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import onBoardForm from './Components/Form'
import './App.css';


function App() {


  return (
    <div className="App">
      <Formik

        render={props => {
          return (
            <Form>
              <div>
                <Field name="name" type="text" placeholder="Enter Name" />
              </div>

              <div>
                <Field name="email" type="text" placeholder="Enter Email" />
              </div>

              <div>
                <Field name="password" type="text" placeholder="Enter Password" />
              </div>
              <button></button>
            </Form>
          )
        }}
      />
      
    </div>
  );
}

export default App;