import React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDayjs';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const primaryColor = 'rgba(0, 148, 255, 1)';

export default function DatePicker({ onChange, value, label }) {
   const handleChange = (newValue) => {
      onChange(newValue);
   };
   return (
      <LocalizationProvider dateAdapter={DateAdapter}>
         <DesktopDatePicker
            disablePast
            showTodayButton
            todayText="Today"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            label={label}
            // components={{
            //    OpenPickerIcon: AccessibleIcon,
            // }}
            renderInput={(params) => (
               <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={[
                     {
                        background: 'rgba(34, 44, 68, 1)',
                        borderRadius: 100,
                        '& .MuiOutlinedInput-root': {
                           '& fieldset': {
                              borderRadius: 100,
                           },
                        },
                        svg: { color: primaryColor },
                     },
                  ]}
                  inputProps={{
                     sx: {
                        '&::placeholder': {
                           color: 'rgba(255, 255, 255, 0.22)',
                        },
                     },
                  }}
                  {...params}
               />
            )}
         />
      </LocalizationProvider>
   );
}
