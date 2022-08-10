import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, fabClasses, Button } from '@mui/material';
import {createVehicleAPI} from '../service/API';

export default function NewVehicle() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const paperStyle={padding:'50px 20px', width:375,margin:"20px auto"}
  const[vin, setVin]=useState('')
  const[make, setMake]=useState('')
  const[model, setModel]=useState('')
  const[year, setYear]=useState('')

  const handleClick = async e => {
    e.preventDefault()
    console.log(user.email)
    const email = user.email
    const vehicle = { vin, email, make, model, year}
    createVehicleAPI(vehicle).then((response) => {window.alert('Added new Vehicle!');
    });
    navigate('/mainMenu')
  }
  React.useEffect(() => {
    if (!user) {
      navigate(`/home`);
      return;
    }
  }, [user]);

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"inherit"}}>New Vehicle</h1>

    <form className={fabClasses.root} noValidate autoComplete='off'>
      <TextField id="outlined-basic" label="VIN" variant="outlined" fullWidth margin="dense"
      value={vin}
      onChange={(e)=>setVin(e.target.value)}
      />
      <TextField id="outlined-basic" label="Make" variant="outlined" fullWidth margin="dense"
      value={make}
      onChange={(e)=>setMake(e.target.value)}
      />
      <TextField id="outlined-basic" label="Model" variant="outlined" fullWidth margin="dense"
      value={model}
      onChange={(e)=>setModel(e.target.value)}
      />
      <TextField id="outlined-basic" label="Year" variant="outlined" fullWidth margin="dense"
      value={year}
      onChange={(e)=>setYear(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    </form>
    </Paper>
    </Container>
  );
}
