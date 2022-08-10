import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
import TextField from '@mui/material/TextField';
import { Container, Paper, fabClasses, Button } from '@mui/material';
import {loginAPI} from '../service/API';

export default function Login() {
  const navigate = useNavigate();
  const paperStyle={padding:'50px 20px', width:375, margin:"20px auto", flex: 1}
  const[email, setEmail]=useState('')
  const[userPassword, setUserPassword]=useState('')
  const[user, setUser]=useState()

  const handleClick = async e => {
    e.preventDefault()
    const loginData = { email, userPassword}
    loginAPI(loginData).then((response) => setUser(response));
    if (user.email !== undefined){
      localStorage.setItem('user', JSON.stringify({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName 
      }))
    } else(console.log("Email undefined"))
    navigate('/mainMenu')
    console.log(user?.firstName)
  }

  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"inherit"}}>Login</h1>

    <form className={fabClasses.root} noValidate autoComplete='off'>
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth margin="dense"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth margin="dense"
      value={userPassword}
      onChange={(e)=>setUserPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick} >Login</Button>
      <h4 style={{color:"inherit"}}>New users register below</h4>
      <Button variant="contained" onClick={() => navigate('/register')} >Register</Button>
    </form>
    </Paper>
    </Container>
  );
}
//backup login (known working not using service/API)
  // const handleClick = async e => {
  //   e.preventDefault()
  //   const loginData = { email, userPassword}
  //   const response = await axios.post("http://localhost:8080/api/user/login", loginData)
  //   setUser(response.data)
  //   localStorage.setItem('user', JSON.stringify({
  //     email: user.email,
  //     firstName: user.firstName,
  //     lastName: user.lastName 
  //   }))
  //   navigate('/mainMenu')
  //   console.log(user?.firstName)
  // }
