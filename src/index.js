import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ProductContext } from './Context/Context';
import { AllProduct } from './Context/AllProduct';
import ProductProvider from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <BrowserRouter>
    <ProductProvider>
    <App />
   </ProductProvider>
   </BrowserRouter>


  
);

reportWebVitals();
