import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="project-qclay-aI">
    <App />
  </BrowserRouter>
);
