import * as React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import { useState } from 'react'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button , fabClasses} from '@mui/material';
import {createHistoryAPI, vehicleHistoryAPI, deleteHistoryAPI} from '../service/API';
import TextField from '@mui/material/TextField';

export default function History() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const currentVehicle = JSON.parse(localStorage.getItem('currentVehicle'))
  const [description, setDescription]=useState()
  const [id, setId]=useState()

  const VehicleHistoryTableHeader = [
    'History #',
    'Description'
  ];

  const [vehicleHistory, setVehicleHistory] = React.useState([]);

  React.useEffect(() => {
    if (!user) {
      navigate(`/home`);
      return;
    }
  }, [user]);

  const handleClick = async e => {
    e.preventDefault()
    const vin =currentVehicle.vin
    const details= {vin, description}
    createHistoryAPI(details).then((response) => {window.alert('History created!')});
    navigate('/history')
  }
  const handleDeleteClick = async e => {
    e.preventDefault()
    deleteHistoryAPI(id).then((response) => {window.alert('History deleted!')});
    navigate('/history')
  }

  React.useEffect(() => {
    vehicleHistoryAPI(currentVehicle.vin).then((response) => setVehicleHistory(response));
  },[]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    > 
    <h2 style={{textAlign: "center"}}> {`Vehicles Maintenance History`} </h2>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {VehicleHistoryTableHeader.map((header) => {
              return <TableCell sx={{ height: 20 }}>{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
        {vehicleHistory.map((history) => (
              <TableRow>
                <TableCell sx={{ height: 20 }}>{history.historyNumber}</TableCell>
                <TableCell sx={{ height: 20 }}>{history.description}</TableCell>
                <TableCell sx={{ height: 20 }}>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <br/>
    <br/>
    <h3 style={{textAlign: "center"}}> {`Add History`} </h3>
    <form className={fabClasses.root} noValidate autoComplete='off'>
      <TextField id="outlined-basic" label="Enter Description" variant="outlined" style ={{width: '80%'}}margin="dense"
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      <br/>
      <Button variant="contained" onClick={handleClick}>Create</Button>
    </form>
    <h3 style={{textAlign: "center"}}> {`Delete History`} </h3>
    <form className={fabClasses.root} noValidate autoComplete='off'>
      <TextField id="outlined-basic" label="Enter History #" style ={{width: '80%'}} variant="outlined" margin="dense"
      value={id}
      onChange={(e)=>setId(e.target.value)}
      />
      <br/>
      <Button variant="contained" onClick={handleDeleteClick}>Delete</Button>
    </form>
  </Box>
  );
}