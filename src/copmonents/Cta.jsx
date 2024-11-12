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
        sx={{
          px: 4,
          py: 1.5,
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '30px',
          backgroundColor: '#ff8c00',
          color: '#ffffff',
          ':hover': {
            backgroundColor: '#ff9500',
          },
        }}
      >
        Join Waitlist
      </Button>
    </Container>
  </Box>
)

export default CTASection
