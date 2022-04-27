import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VigoForm from './VigoForm';
import VigoList from './VigoList';
import VigoMain from './VigoMain';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById("root");

root.render(
  <BrowserRouter>
     <App />
    <Routes>
      <Route path="/" element={<VigoMain />} />
      <Route path="skjema" element={<VigoForm />} />
      <Route path="list" element={<VigoList />} />
    </Routes>
  </BrowserRouter>
, rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
