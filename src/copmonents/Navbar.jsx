import { Box, Typography, Button } from '@mui/material';
import logo from '../assets/logo.png';

const Navbar = () => {
  
  return (
    <Box sx={{ width: '100%', background: 'linear-gradient(180deg, #F8F8FC 100%, #F8F8FC00 0%)', }}>
      <Box
        sx={{
          paddingLeft: '10%',
          paddingRight: '10%',
          paddingTop: '1%',
          paddingBottom: '1%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <img src={logo} alt="logo" height={'50'} width={'50'} />
        
        {/* Navbar Links */}
        <Box display={'flex'} alignItems={'center'} gap={5}>
          <Typography fontFamily={'Inter,sans-serif'} color={'#2C3131'} fontSize={'16px'}>
            About Us 
          </Typography>
          <Typography fontFamily={'Inter,sans-serif'} color={'#2C3131'} fontSize={'16px'}>
            Vision
          </Typography>
          <Typography fontFamily={'Inter,sans-serif'} color={'#2C3131'} fontSize={'16px'}>
            Business
          </Typography>
          <Typography fontFamily={'Inter,sans-serif'} color={'#2C3131'} fontSize={'16px'}>
            Teams
          </Typography>
        </Box>

        {/* Sign in or User Icon */}
        <Box display={'flex'} alignItems={'center'} gap={5}>
         

          {/* Get Started Button */}
          <Button
            sx={{
              border: '1px solid #2752E7',
              borderRadius: '5px',
              padding: 1,
              color: '#2752E7',
              fontFamily: 'Inter,sans-serif',
              textTransform: 'capitalize',
              paddingLeft: '1.5em',
              paddingRight: '1.5em',
              fontWeight: '600',
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
