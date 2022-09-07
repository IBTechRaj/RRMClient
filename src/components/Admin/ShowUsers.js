
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ShowUsers(props) {

  const [usersData, setUsersData] = useState(null);

  const usersUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/list_users/` : `http://localhost:3001/list_users/`

  const getUsers = () => {
    axios.get(usersUrl,)
      .then(response => {
        console.log('users.dat', response.data)
        setUsersData(response.data.data)
      })
  }
  useEffect(() => {

    getUsers()
  }, [])


  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />



        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

        </Box>
        <div>
          <h3 className='text-center'>List of Customers</h3>
          <ul>
            {usersData &&
              usersData.map(({ id, first_name, last_name, email }) => (
                <li key={id}>
                  <p> First Name: {first_name},  {'   '} Last Name: {last_name}, {'   '} Email: {email}
                  </p>
                </li>

              ))}
          </ul>
        </div>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={props.onClose}
        >
          Exit
        </Button>
        {/* </Box> */}

      </Container>
    </ThemeProvider >
  )
}
