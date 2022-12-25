import React from "react"
import Navbar from './Navbar'
import Section from './Section'
import About from "./About"

import { 
  Container,
  Box 
} from '@mui/material';
export default function App() {

  return (
    <div>
      <Navbar />
      <Container className='container' disableGutters sx={{maxWidth: 'xl', height: '100%'}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='ABOUT'/>
      </Box>
      <Box sx={{width: '75%', margin: 'auto'}}>
      <About/>
      </Box>
      
      </Container>
    </div>
  )
  
}


