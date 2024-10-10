import React from 'react';
import { Grid } from '@mui/material';
import OptionButton from './OptionButton';

function OptionList({ options, handleAnswer }) {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{backgroundColor:"transparent"}}>
      {options.map((option, index) => (
        <Grid item xs={6} key={index}> {/* Create a 2x2 grid */}
          <OptionButton option={option} handleAnswer={handleAnswer} />
        </Grid>
      ))}
    </Grid>
  );
}

export default OptionList;
