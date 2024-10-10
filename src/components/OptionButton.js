import React from 'react';
import { Box, Button } from '@mui/material';

function OptionButton({ option, handleAnswer }) {
  return (
    <Box
      sx={{
        width: '150px',
        height: '150px',
        display: 'inline-block',
        margin: '10px',
      }}
    >
      <Button
        onClick={() => handleAnswer(option)}  // Trigger answer handler
        sx={{
          width: '70%',
          height: '70%',
          backgroundImage: `url(${option.image})`,  // Use the image passed from the quizData
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Box>
  );
}

export default OptionButton;
