import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import {store} from './Store'
import {Provider, useSelector} from 'react-redux'

//Components
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
