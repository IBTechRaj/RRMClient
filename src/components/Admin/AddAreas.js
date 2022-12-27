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

  console.log('admin')
  // const { spSalonId } = props
  const [pincode, setPincode] = useState(0)
  const [areaAgent, setAreaAgent] = useState(0)
  // const [serviceOfferPrice, setServiceOfferPrice] = useState(0);
  // const [description, setDescription] = useState('')
  // const [serviceData, setServiceData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const servicesUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/services/` : `http://localhost:3001/services/`
  // const serviceDelUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/services/` : `http://localhost:3001/services/`
  const serviceAreaAddUrl = (process.env.REACT_APP_SERVER) ? `https://motorwash-backend-lfxt.onrender.com/areas/` : `http://localhost:3001/areas/`


  const jwt = localStorage.getItem('token');

  // const getServices = () => {
  //   axios.get(servicesUrl, {
  //     headers: { Authorization: `Bearer ${jwt}` },
  //   })
  //     .then(response => {
  //       console.log('res.dat', response.data)
  //       setServiceData(response.data)
  //     })
  // }
  // useEffect(() => {

  //   getServices()
  // }, [])
  const area = {
    pincode: pincode,
    user_id: areaAgent,
    // offerprice: serviceOfferPrice,
    // description: description
  }

  const handleAddAreaSubmit = (e) => {
    e.preventDefault();
    console.log('AreaData', area)

    // const servicesUrl = (process.env.REACT_APP_SERVER) ? `https://groomserver.herokuapp.com/services` : `http://localhost:3001/services`

    axios.post(serviceAreaAddUrl, area, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then(response => {
        if (response.status === 201) {
          console.log('Service Area Added')
          setPincode(0)
          setAreaAgent(0)
          // setServiceOfferPrice(0)
          // getServices()
        }
      })

  };


  // const handleDelete = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       serviceDelUrl + id
  //     );
  //     console.log('del', response)
  //     getServices()
  //     setError(null);
  //   } catch (err) {
  //     console.log('e', err.message)
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <MiscellaneousServicesOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add  Service Area
          </Typography>
          {/* <Typography component="div" variant="subtitle1">
            These are the services you are offering at present
          </Typography> */}
          <hr></hr>
          {/* <Typography component="div" variant="subtitle1">
            <ul>
              {serviceData &&
                serviceData.map(({ id, sname, price, offerprice, description }) => (
                  <li key={id}>
                    <p> {sname},  {'   '} Price: {price}, {'   '} Offer Price: {offerprice}, {'   '} Description: {description}
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleDelete(id)}>Delete</Button></p>
                  </li>

                ))}
            </ul>
          </Typography> */}
        </Box>

        <Box component="form" noValidate onSubmit={handleAddAreaSubmit} sx={{ mt: 3, alignItems: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={8} sm={4} md={3}>
              <TextField
                required
                fullWidth
                id="pincode"
                label="Service Area Pincode"
                value={pincode}
                onChange={event => {
                  setPincode(event.target.value)
                }}
              />
            </Grid>

            <Grid item xs={8} sm={4} md={3}>
              <TextField
                required
                fullWidth
                id="areaAgent"
                label="Area Agent Code"
                value={areaAgent}
                onChange={event => {
                  setAreaAgent(event.target.value)
                }}
              />
            </Grid>

            {/* <Grid item xs={8} sm={4} md={3}>
              <TextField
                required
                fullWidth
                id="offerprice"
                label="Offer Price"
                value={serviceOfferPrice}
                onChange={event => {
                  setServiceOfferPrice(event.target.value)
                }}
              />
            </Grid> */}

            {/* <Grid item xs={8} sm={4} md={3}>
              <TextField
                required
                fullWidth
                id="description"
                label="Description"
                value={description}
                onChange={event => {
                  setDescription(event.target.value)
                }}
              />
            </Grid> */}

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
