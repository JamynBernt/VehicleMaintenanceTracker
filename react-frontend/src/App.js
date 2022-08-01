
import './App.css';
import Appbar from './components/appBar';
import Login from './routes/login';
//import Register from './routes/register';
import { Outlet } from 'react-router-dom';
//import axios from 'axios';


function App() {
  return (
      <div className="App">
        <Appbar/>
        <Outlet/>
      </div>

  );
}

export default App;
