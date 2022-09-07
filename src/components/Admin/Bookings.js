import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function Bookings(props) {

  const [bookingsData, setBookingsData] = useState([]);

  const bookingsUrl = (process.env.REACT_APP_SERVER) ? `https://mymotorwash.herokuapp.com/bookings/` : `http://localhost:3001/bookings/`

  const getBookings = () => {
    axios.get(bookingsUrl,)
      .then(response => {
        setBookingsData(response.data)
      })
  }
  useEffect(() => {

    getBookings()
  }, [])


  const pb = bookingsData.filter(bkg => {
    return bkg.bkg_date < new Date().toISOString().slice(0, 10)
  })
  const fb = bookingsData.filter(bkg => {
    return bkg.bkg_date > new Date().toISOString().slice(0, 10)
  })

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
          <div className='row'>
            <div className='col-6'>
              <h3> Past Bookings</h3>
              <ul>
                {console.log('filtered-1', pb)}
                {pb &&
                  pb.map(({ id, bkg_date, service, pincode }) => (
                    <li key={id}>
                      <p> Booking Date: {bkg_date},   {'   '} Service: {service}, {'   '} Pincode: {pincode}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
            <div className='col-6'>
              <h3> Forthcoming Bookings</h3>
              <ul>
                {fb.map(bkg => {
                  return (
                    <li key={bkg.id}>
                      <p>Booking Date: {bkg.bkg_date},   {'   '} Service: {bkg.service},   {'   '} Pincode: {bkg.pincode}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={props.onClose}
        >
          Exit
        </Button>
      </Container>
    </ThemeProvider >
  )
}
