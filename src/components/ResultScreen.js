import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';

function ResultScreen({ score, total, restartGame }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          textAlign: 'center',
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#1976D2' }}
        >
          🎉 Quiz Completed!
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: '#333', marginBottom: 3 }}
        >
          Your Score: <strong>{score} / {total}</strong>
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ padding: '10px 20px', borderRadius: '20px' }}
          onClick={restartGame}
        >
          Play Again
        </Button>
      </Paper>
    </Box>
  );
}

export default ResultScreen;
