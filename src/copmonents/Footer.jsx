import React from 'react'
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => (
  <Box sx={{ backgroundColor: '#F8F8FC', color: '#333', py: 6, mt: 0 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {/* Column 1: About */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#003366' }}>
            About CapitalFi
          </Typography>
          <Typography variant="body2" sx={{ color: '#666' }}>
            CapitalFi enables seamless, cross-border payments, making global financial transactions as easy as local ones.
          </Typography>
        </Grid>

        {/* Column 2: Navigation Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#003366' }}>
            Quick Links
          </Typography>
          <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1, color: '#333' }}>
            Home
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1, color: '#333' }}>
            Features
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1, color: '#333' }}>
            Pricing
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1, color: '#333' }}>
            Contact Us
          </Link>
        </Grid>

        {/* Column 3: Contact Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#003366' }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
            Email: support@capitalfi.com
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
            Phone: +1 (555) 123-4567
          </Typography>
          <Typography variant="body2" sx={{ color: '#666' }}>
            Address: 123 Finance St, New York, NY 10001
          </Typography>
        </Grid>

        {/* Column 4: Social Media */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#003366' }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="https://facebook.com" target="_blank" rel="noopener" sx={{ color: '#005fa3' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" rel="noopener" sx={{ color: '#005fa3' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" rel="noopener" sx={{ color: '#005fa3' }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" rel="noopener" sx={{ color: '#005fa3' }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Row: Copyright */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" sx={{ color: '#666' }}>
          © {new Date().getFullYear()} CapitalFi. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
)

export default Footer
