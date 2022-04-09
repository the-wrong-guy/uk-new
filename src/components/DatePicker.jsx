import React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

const primaryColor = 'rgba(0, 148, 255, 1)';

export default function DatePicker({ onChange, value, label }) {
   const handleChange = (newValue) => {
      onChange(newValue);
   };
   return (
      <LocalizationProvider dateAdapter={DateAdapter}>
         <DateTimePicker
            disablePast
            showTodayButton
            todayText="Today"
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
                  InputLabelProps={{
                     style: {
                        color: 'rgba(0, 148, 255, 1)',
                     },
                  }}
                  {...params}
               />
            )}
            InputProps={{
               style: { color: '#fff' },
            }}
         />
      </LocalizationProvider>
   );
}
