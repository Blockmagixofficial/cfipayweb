import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import visionImg from "../assets/vision.webp"

const Vision = () => (
  <Box
    sx={{
      position: 'relative',
      py: 10,
      background: "white",
      overflow: 'hidden',
    }}
  >
    {/* Background Blur Circles */}
    <Box
      sx={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.2)',
        filter: 'blur(60px)',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(0, 0, 255, 0.2)',
        filter: 'blur(80px)',
      }}
    />

    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Illustration Section with Circular Image */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: { xs: 4, md: 0 },
        }}
      >
        <Box
          component="img"
          src={visionImg}
          alt="vision"
          sx={{
            width: 300,         // Adjust width and height to match
            height: 300,
            borderRadius: '50%', // Make the image circular
            objectFit: 'cover',  // Ensure the image covers the circular shape fully
          }}
        />
      </Box>

      {/* Glassmorphic Text Content Section */}
      <Box
        sx={{
          flex: 1,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          p: 4,
          maxWidth: '500px',
          textAlign: { xs: 'center', md: 'left' },
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            background: 'linear-gradient(90deg, #ff9a9e, #fad0c4, #fad0c4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient 5s ease infinite',
            color:'#003366',
            '@keyframes gradient': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' },
            },
          }}
        >
          Our Vision
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#003366',
            mb: 2,
          }}
        >
          Unifying Global Payments
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#666',
          }}
        >
          At CapitalFi, we envision a world where everyone, regardless of location, can seamlessly send and receive payments. We aim to unify global payments with one digital identity, creating a borderless financial experience for all.
        </Typography>
      </Box>
    </Container>
  </Box>
)

export default Vision
