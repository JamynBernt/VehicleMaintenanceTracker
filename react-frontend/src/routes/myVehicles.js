import * as React from 'react';
import { useNavigate} from 'react-router-dom';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';

import {myVehiclesAPI} from '../service/API';

export default function MyVehicles() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const MyVehiclesTableHeader = [
    'VIN',
    'Make',
    'Model',
    'Year',
  ];

  const [myVehicles, setMyVehicles] = React.useState([]);

  React.useEffect(() => {
    if (!user) {
      navigate(`/`);
      return;
    }
  }, [user]);

  React.useEffect(() => {
    myVehiclesAPI(user.email).then((response) => setMyVehicles(response));
  }, [user]);

  return (
    <div>
        <h2 style={{textAlign: "center"}}> {`${user?.firstName}'s Vehicles`} </h2>
    </div>

  );
}