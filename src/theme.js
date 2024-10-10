import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#268326', // Royal Blue
    },
    secondary: {
      main: '#FF8C00', // Bright Orange
    },
    background: {
      default: '#F0F0F0', // Light Gray
      paper: '#FFFFFF', // White for card surfaces or modals
    },
    text: {
      primary: '#333333', // Charcoal for primary text
      secondary: '#757575', // Lighter gray for secondary text
    },
    success: {
      main: '#32CD32', // Lime Green for correct answers or success
    },
    error: {
      main: '#DC143C', // Crimson Red for wrong answers or errors
    },
    warning: {
      main: '#FFD700', // Soft Yellow for warning or highlights
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          // Define a new custom variant named 'startButton'
          props: { variant: 'startButton' },
          style: {
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            zIndex: 100,
          },
        },
        {
          // Define a new custom variant named 'nextButton'
          props: { variant: 'nextButton' },
          style: {
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            zIndex: 100,
            backgroundColor: "#268326",
            color:"white",
            fontWeight:"bolder",
            width:"auto",
            fontSize:"20px"
          },
        },
        
      ],
    },
  },
});

export default theme;
