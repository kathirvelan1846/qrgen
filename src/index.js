import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/Qrcode.css'

import reportWebVitals from './reportWebVitals';
import { Qrcode } from './components/Qrcode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Qrcode/>
  </React.StrictMode>
);
 
reportWebVitals();
