import * as React from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { useState } from 'react'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button , fabClasses} from '@mui/material';

import {myVehiclesAPI, sellVehicleAPI} from '../service/API';

export default function MyVehicles() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [email, setEmail]=useState()
  const [vin, setVin]=useState()

  const MyVehiclesTableHeader = [
    'VIN',
    'Make',
    'Model',
    'Year',
  ];

  const [myVehicles, setMyVehicles] = React.useState([]);

  React.useEffect(() => {
    if (!user) {
      navigate(`/home`);
      return;
    }
  }, [user]);

  const handleClick = async e => {
    e.preventDefault()
    sellVehicleAPI(email, vin).then((response) => {window.alert('Vehicle Sold!')});
  }

  React.useEffect(() => {
    myVehiclesAPI(user.email).then((response) => setMyVehicles(response));
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    > 
    <h2 style={{textAlign: "center"}}> {`${user?.firstName}'s Vehicles`} </h2>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {MyVehiclesTableHeader.map((header) => {
              return <TableCell sx={{ height: 20 }}>{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
        {myVehicles.map((item) => (
              <TableRow>
                <TableCell sx={{ height: 20 }}>{item.vin}</TableCell>
                <TableCell sx={{ height: 20 }}>{item.make}</TableCell>
                <TableCell sx={{ height: 20 }}>{item.model}</TableCell>
                <TableCell sx={{ height: 20 }}>{item.year}</TableCell>
                <TableCell sx={{ height: 20 }}>
                  <Link
                    onClick={localStorage.setItem('currentVehicle', JSON.stringify({
                      vin: item.vin
                    }))}
                    to={`/history/`}
                    state={{ fromSearchItems: false }}
                    >
                    Vehicle History
                    </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h3 style={{textAlign: "center"}}> {`Sell Vehicle`} </h3>
    <form className={fabClasses.root} noValidate autoComplete='off'>
      <TextField id="outlined-basic" label="Enter buyer's email" style ={{width: '80%'}} variant="outlined" margin="dense"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Enter VIN of vehicle to be sold" style ={{width: '80%'}} variant="outlined" margin="dense"
      value={vin}
      onChange={(e)=>setVin(e.target.value)}
      />
      <br/>
      <Button variant="contained" onClick={handleClick}>Sell Vehicle</Button>
    </form>
  </Box>
  );
}
