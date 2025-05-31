// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// import './styles/style.css';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <App />,
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
