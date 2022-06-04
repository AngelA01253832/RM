import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




export function AddWeightCard() {
    
  
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          color="primary" focused
          id="outlined-name"
          label="Weight"
        />
        <TextField
          color="primary" focused
          id="outlined-uncontrolled"
          label="Date"
        />
      </Box>
    );
  }