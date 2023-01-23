import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import {
  BrowserRouter as Router,Route, Routes
} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import dataReducer from "./slices/index"

const store = configureStore({
  reducer:{
    data:dataReducer
  }
});

const Root = () => (
  <Router>
    <Routes>
      <Route exact path='/' element={<App/>}/>
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);

export default Root


