import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './routes/login';
import Register from './routes/register';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainMenu from './routes/mainMenu';
import { AppBar } from '@mui/material';
import MyVehicles from './routes/myVehicles';
import Home from './routes/home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppBar/>
        <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="mainMenu" element={<MainMenu />} />
          <Route path="myVehicles" element={<MyVehicles />} />
        </Route>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
