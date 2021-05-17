import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {TextField, Selection, RadioButton} from './componenets/TextField';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <div>
      <TextField />
      <Selection values ={['car', 'bike', 'apoorva']}/>
      <RadioButton values ={['car', 'bike', 'p']}/>
    </div>
    {/* <RadioButton values ={['car', 'bike']}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
