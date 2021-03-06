import { useState } from 'react';
import {
   Container,
   Button,
   Typography,
   Grid,
   TextField,
   InputAdornment,
   Box,
   useMediaQuery,
   useTheme,
} from '@mui/material';
import DatePicker from './components/DatePicker';
import Pagination from '@mui/material/Pagination';

const bgColor =
   'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #0094FF 0%, #0063AB 100%)';

function App() {
   const [startDate, setStartDate] = useState(null);
   const [endDate, setEndDate] = useState(null);
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('sm'));
   return (
      <Container sx={{ pt: '41px', pb: '30px' }}>
         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
               align="center"
               sx={{
                  fontWeight: '700',
                  color: '#fff',
                  borderRadius: 100,
                  backgroundImage: bgColor,
                  px: matches ? '18px' : '30px',
                  py: matches ? '6px' : '10px',
                  display: 'inline-block',
                  fontSize: matches ? '16px' : '26px',
               }}
            >
               ACTIVE TREND
            </Typography>
         </Box>
         <Grid
            container
            rowSpacing={2}
            columnSpacing={3}
            sx={{ mt: '52px', mb: '38px' }}
         >
            <Grid item xs={12} md={3}>
               <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(value) => setStartDate(value)}
               />
            </Grid>
            <Grid item xs={12} md={3}>
               <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(value) => setEndDate(value)}
               />
            </Grid>
            <Grid item xs={12} md={6}>
               <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  label="PinkSale Presale Address"
                  sx={[
                     {
                        background: 'rgba(34, 44, 68, 1)',
                        borderRadius: 100,
                        '& .MuiOutlinedInput-root': {
                           '& fieldset': {
                              borderRadius: 100,
                           },
                           paddingRight: '6px',
                        },
                     },
                  ]}
                  inputProps={{
                     sx: {
                        '&::placeholder': {
                           color: 'rgba(255, 255, 255, 0.22)',
                        },
                        color: '#fff',
                     },
                  }}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <Button
                              size="small"
                              sx={{
                                 borderRadius: 100,
                                 backgroundImage: bgColor,
                                 fontWeight: '700',
                                 color: '#fff',
                              }}
                           >
                              Add
                           </Button>
                        </InputAdornment>
                     ),
                  }}
                  InputLabelProps={{
                     style: {
                        color: 'rgba(0, 148, 255, 1)',
                     },
                  }}
               />
            </Grid>
         </Grid>
         <Box
            sx={{
               bgcolor: 'rgba(34, 44, 68, 1)',
               px: '22px',
               minHeight: 'calc(100vh - 343px)',
               overflowX: 'auto',
               position: 'relative',
            }}
         >
            <table className="table">
               <thead>
                  <tr>
                     <th>Token</th>
                     <th>Link</th>
                     <th>Position</th>
                     <th>Start Trending</th>
                     <th>Finish Trending</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>3RCrypto (Triple R)</td>
                     <td>
                        <a className="table-link" href="#">
                           3RCrypto (Triple R)
                        </a>
                     </td>
                     <td>1</td>
                     <td>4th Apr 22, 13:00</td>
                     <td>8th Apr 22, 19:00</td>
                     <td>
                        <Button
                           size="small"
                           sx={{
                              borderRadius: 100,
                              backgroundImage:
                                 'linear-gradient(180deg, #E51515 0%, #9D0000 100%)',
                              fontWeight: '700',
                              color: '#fff',
                              px: 2,
                           }}
                        >
                           Remove
                        </Button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </Box>
         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Pagination count={7} color="primary" />
         </Box>
      </Container>
   );
}

export default App;
