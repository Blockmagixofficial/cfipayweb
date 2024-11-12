import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'

// CTA Section Component with the Same Background as Hero Section
const CTASection = () => (
  <Box
    sx={{
      py: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #001f3f, #005fa3)', // Same gradient as Hero section
      color: '#ffffff',
    }}
  >
    <Container maxWidth="sm">
      {/* Headline */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        Join the CapitalFi Waitlist
      </Typography>

      {/* Description */}
      <Typography variant="body1" sx={{ mb: 4 }}>
        Sign up to receive updates from CapitalFi and be among the first to experience cross-border payments revolutionized.
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{
          backgroundColor: 'transparent',
          color: '#ffffff',
          fontWeight: 'bold',
          textTransform: 'none',
          border:"1px solid white",
          px: 4,
          py: 1.5,
          borderRadius: '10px',
        //   animation: `${fadeIn} 2s ease-out forwards`,
          animationDelay: '0.5s',
          ':hover': {
            // animation: `${pulse} 1.5s infinite`,
            // backgroundColor: '#ff9500',
          },
        }}
      >
       Join Waitlist
      </Button>
    </Container>
  </Box>
)

export default CTASection
