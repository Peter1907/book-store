import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
}
  from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './Books';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Categories from './pages/Categories';
import store from './redux/configureStore';
// import { Table } from './components/Table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
