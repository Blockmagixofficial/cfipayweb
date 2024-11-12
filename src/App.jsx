// import React from 'react'
import { Box, Button, Container,Typography,Grid} from '@mui/material'
import Navbar from './copmonents/Navbar'
import HeroSection from './copmonents/Hero'
import VisionSection from './copmonents/Vision'
import FeatureSection from './copmonents/Features'
import DescriptiveSection from './copmonents/Descriptive'
import CTASection from './copmonents/Cta'
import Footer from './copmonents/Footer'
const App = () => (
  <Box>
    <Navbar />
    <HeroSection />
    <VisionSection />
    <FeatureSection />
    <DescriptiveSection /> 
    <CTASection />
    <Footer/>
  </Box>
)

export default App
