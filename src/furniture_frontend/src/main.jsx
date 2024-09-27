import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './Root';
import { CartCounterProvider } from './Components/Features/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='mainwrapper1'>
    <CartCounterProvider>
      <Root />
    </CartCounterProvider>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

