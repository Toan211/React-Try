import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//NOTE - need for react bootstap css 
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
  ! //FIXME -  strict mode render component twice to check for issues
              cant detect side effect, but can spot them by make them deterministic (same input, same result must happen)
   */
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


