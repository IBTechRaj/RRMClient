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

export default function AddAreas(props) {

  // const [agentsData, setAgentsData] = useState(null);

  // const agentsUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/list_agents/` : `http://localhost:3001/list_agents/`

  // const getAgents = () => {
  //   axios.get(agentsUrl,)
  //     .then(response => {
  //       console.log('agents.dat', response.data)
  //       setAgentsData(response.data.data)
  //     })
  // }
  // useEffect(() => {

  //   getAgents()
  // }, [])


  // const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />



        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <MiscellaneousServicesOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add/Delete Your Services Details
          </Typography>
          <Typography component="div" variant="subtitle1">
            These are the services you are offering at present
          </Typography>
          <hr></hr>
          <Typography component="div" variant="subtitle1">
            <ul>
              {serviceData &&
                serviceData.map(({ id, stype, sduration, sprice, salon_id }) => (
                  <li key={id}>
                    <h5> {id}{stype},  duration: {sduration} minutes,{'   '} price: {sprice} <Button onClick={() => handleDelete(id)}>Delete</Button></h5>
                  </li>

                ))}
            </ul>
          </Typography>
        </Box>

        <Box component="form" noValidate onSubmit={handleServiceSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                required
                fullWidth
                id="service_area"
                label="Service Area Pincode"
                value={serviceArea}
                onChange={event => {
                  setServiceArea(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                required
                fullWidth
                id="service_agent"
                label="Service Agent ID"
                value={serviceAgent}
                onChange={event => {
                  setServiceAgent(event.target.value)
                }}
              />
            </Grid>



          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add
          </Button>
          <Typography component="div" variant="subtitle1">
            When you finish, click on Exit
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={props.onClose}
          >
            Exit
          </Button>
        </Box>

      </Container>
    </ThemeProvider >
  )
}
