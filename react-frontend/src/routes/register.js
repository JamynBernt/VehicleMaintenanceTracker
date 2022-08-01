import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, fabClasses, Button } from '@mui/material';

export default function Register() {
  const paperStyle={padding:'50px 20px', width:375,margin:"20px auto"}
  const[firstName, setFirstName]=useState('')
  const[lastName, setLastName]=useState('')
  const[email, setEmail]=useState('')
  const[userPassword, setUserPassword]=useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const user={firstName, lastName, email, userPassword}
    console.log(user)
    fetch("http://localhost:8080/api/user/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
      console.log("User Registered Successfully!")
    })
  }
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"inherit"}}>Register</h1>

    <form className={fabClasses.root} noValidate autoComplete='off'>
      <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth margin="dense"
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth margin="dense"
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth margin="dense"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth margin="dense"/>
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" fullWidth margin="dense"
      validate=""
      value={userPassword}
      onChange={(e)=>setUserPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    </form>
    </Paper>
    </Container>
  );
}
