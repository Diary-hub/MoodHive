import { Typography, useTheme } from '@mui/material';
import logo from './logo.png';
import './logosize.css';
const Logo = () => {
  const theme = useTheme();

  return (
    
    <Typography fontWeight="700" fontSize="1.7rem" text='center'>
          

          <img src={logo} alt="Logo" />
      Mood<span style={{ color: theme.palette.primary.main }}>Hive</span>
    </Typography>
  );
};

export default Logo;