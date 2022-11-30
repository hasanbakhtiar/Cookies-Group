import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouters from './routers/AppRouters';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>
);

