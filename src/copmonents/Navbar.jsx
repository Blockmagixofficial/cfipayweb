import { Box, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(180deg, #F8F8FC 100%, #F8F8FC00 0%)',
      }}
    >
      <Box
        sx={{
          paddingLeft: { xs: '5%', md: '10%' },
          paddingRight: { xs: '5%', md: '10%' },
          paddingTop: { xs: '0.5em', md: '1%' },
          paddingBottom: { xs: '0.5em', md: '1%' },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <img src={logo} alt="logo" height={'40'} width={'40'} />

        {/* Navbar Links */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 5,
          }}
        >
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

        {/* Contact Button or Menu Icon for Mobile */}
        <Box display={'flex'} alignItems={'center'} gap={3}>
          {/* Contact Us Button (hidden on mobile) */}
          <Button
            sx={{
              display: { xs: 'none', md: 'block' },
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

          {/* Menu Icon (only visible on mobile) */}
          <IconButton
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: '#2752E7',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
