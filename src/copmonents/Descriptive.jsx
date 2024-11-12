import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { keyframes } from '@emotion/react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import SendIcon from '@mui/icons-material/Send'
import QrCodeIcon from '@mui/icons-material/QrCode'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'

// Floating effect for cards
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`

const DescriptiveSection = () => (
  <Box
    sx={{
      py: 10,
      background: 'linear-gradient(135deg, #f8efff, #e0f7fa)',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Background Artistic Shapes */}
    <Box
      sx={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'rgba(255, 206, 255, 0.3)',
        filter: 'blur(80px)',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(204, 237, 255, 0.4)',
        filter: 'blur(100px)',
      }}
    />

    <Container maxWidth="lg">
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 8,
          fontWeight: 'bold',
          color: '#003366',
          background: 'linear-gradient(90deg, #003366, #005fa3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Effortless Global Transactions
      </Typography>

      {/* Grid Layout for Descriptive Sections */}
      <Grid container spacing={6}>
        {/* Effortless, Low-Cost Transfers */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              animation: `${float} 6s ease-in-out infinite`,
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <CurrencyExchangeIcon sx={{ fontSize: 60, color: '#005fa3', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                 Low-Cost Transfers Across Borders
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Experience Effortless and nearly fee-free transfers between global currencies with CapitalFi. Pay friends or handle expenses in any currency without worrying about high fees or hidden charges.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Simple Payments, Anytime, Anywhere */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              animation: `${float} 6s ease-in-out infinite`,
              animationDelay: '0.5s',
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <SendIcon sx={{ fontSize: 60, color: '#00796b', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Simple Payments, Anytime, Anywhere
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CapitalFi makes it easy to send and request money, even if the other person doesn’t have an account. Effortless transactions with just a few taps.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Your Unique CapitalFi ID and QR Code */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              animation: `${float} 6s ease-in-out infinite`,
              animationDelay: '1s',
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <QrCodeIcon sx={{ fontSize: 60, color: '#8e24aa', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Your Unique CapitalFi ID and QR Code
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sending and receiving money is as easy as sharing your unique ID or scanning a QR code. Simple and secure, with no need for complicated account details.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Effortless Payments for Your Business */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              animation: `${float} 6s ease-in-out infinite`,
              animationDelay: '1.5s',
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <BusinessCenterIcon sx={{ fontSize: 60, color: '#d84315', mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Effortless Payments for Your Business
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CapitalFi streamlines payments for businesses, allowing global transactions to be as simple as local ones. Focus on growth, not logistics.Truely Yours
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default DescriptiveSection
