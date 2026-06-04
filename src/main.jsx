import React from 'react';
import { createRoot } from 'react-dom/client';
import Calculator from './components/Calculator';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import LandingPage from './components/LandingPage';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>
// );
