import React from 'react'
import { Box, Button, Container, Typography,useMediaQuery } from '@mui/material'
import { keyframes } from '@emotion/react'

// Keyframes for subtle animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 140, 0, 0.7); }
  70% { box-shadow: 0 0 0 20px rgba(255, 140, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 140, 0, 0); }
`

const HeroSection = () =>{
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
  
  <Box
    sx={{
      position: 'relative',
      height: !isMobile ? '100vh' : "70vh",
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #001f3f, #005fa3)',
      overflow: 'hidden',
      isolation: 'isolate',
      width: "100%" // Allows layering effects
    }}
  >
    {/* Background Video Layer */}
    <Box
      component="video"
      src="https://cdn.pixabay.com/vimeo/12345678/abstract-wave-background.mp4"
      autoPlay
      loop
      muted
      playsInline
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.4, // Light opacity to not overpower text
      }}
    />

    {/* Background Overlay Shapes */}
    <Box
      sx={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'rgba(255, 140, 0, 0.5)',
        filter: 'blur(100px)',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: '15%',
        right: '15%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(0, 255, 255, 0.5)',
        filter: 'blur(120px)',
      }}
    />

    {/* Content */}
    <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 2 }}>
      {/* Main Title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2.5rem', md: '4rem' },
          fontWeight: 'bold',
          animation: `${fadeIn} 1s ease-out forwards`,
        }}
      >
        Seamless Cross-Border Payments in Seconds
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        sx={{
          mt: 2,
          mb: 4,
          color: '#e0e0e0',
          maxWidth: '700px',
          mx: 'auto',
          animation: `${fadeIn} 1.5s ease-out forwards`,
          opacity: 0.8,
        }}
      >
        Send and receive money globally with ease, speed, and near-zero fees. Join us in revolutionizing international payments.
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{
          backgroundColor: '#ff8c00',
          color: '#fff',
          fontWeight: 'bold',
          textTransform: 'none',
          px: 4,
          py: 1.5,
          borderRadius: '50px',
          animation: `${fadeIn} 2s ease-out forwards`,
          animationDelay: '0.5s',
          ':hover': {
            animation: `${pulse} 1.5s infinite`,
            backgroundColor: '#ff9500',
          },
        }}
      >
        Get Started
      </Button>
    </Container>

    {/* Phone Mockup Image */}
    {/* <Box
      component="img"
      src="https://cdn.example.com/mockups/phone-mockup.png"
      alt="App Mockup"
      sx={{
        position: 'absolute',
        right: { xs: '-10%', md: '10%' },
        bottom: '5%',
        width: { xs: '150px', md: '300px' },
        transform: 'rotate(-10deg)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        animation: `${fadeIn} 2s ease-out forwards`,
        animationDelay: '0.8s',
      }}
    /> */}
  </Box>
)
}

export default HeroSection
