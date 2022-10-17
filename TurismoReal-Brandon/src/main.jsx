import React from 'react';
import ReactDOM from 'react-dom/client';
import TurismoApp from './TurismoApp';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <TurismoApp />
    </BrowserRouter>
  </React.StrictMode>
)
 