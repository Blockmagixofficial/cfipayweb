import React from 'react'
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material'
import { keyframes } from '@emotion/react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import SpeedIcon from '@mui/icons-material/Speed'
import TouchAppIcon from '@mui/icons-material/TouchApp'

// Hover animation keyframes
const hoverEffect = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
`

// Features Data Array
const features = [
  {
    title: 'Nearly Zero Fees',
    description: 'Transfer your money with low-fee transfers, avoiding high costs of traditional banking.',
    icon: <AttachMoneyIcon sx={{ fontSize: 60, color: '#ff8c00' }} />,
  },
  {
    title: 'Instant Transfer',
    description: 'Your money reaches friends, family, or business partners almost instantly, anywhere.',
    icon: <SpeedIcon sx={{ fontSize: 60, color: '#00c853' }} />,
  },
  {
    title: 'Easy Payments',
    description: 'Send money abroad with just a QR code or ID—fast and easy with a few taps.',
    icon: <TouchAppIcon sx={{ fontSize: 60, color: '#2962ff' }} />,
  },
]

// Feature Section Component with Advanced Styling
const FeatureSection = () => (
  <Box sx={{ py: 8, background: 'linear-gradient(235deg, #001f3f, #005fa3)', }}>
    <Container maxWidth="lg">
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          color: '#fff',
        }}
      >
        Why Choose CapitalFi
      </Typography>

      {/* Feature Grid */}
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                p: 2,
                textAlign: 'center',
                background: '#fff',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  animation: `${hoverEffect} 0.3s ease forwards`,
                },
              }}
            >
              <CardContent>
                {/* Icon */}
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>

                {/* Title */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#003366' }}>
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: '#666',
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

export default FeatureSection
