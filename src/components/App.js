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
      <Container maxWidth={false} disableGutters sx={{backgroundColor: 'black', p: '10px', mt: '64px', mr: '0px'}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='ABOUT'/>
      </Box>
      <Box sx={{width: '30%', margin: 'auto', textAlign:'center'}}>
      <About/>
      </Box>
      </Container>

      <Container maxWidth={false} disableGutters sx={{backgroundColor: '#212121', p: '10px',}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='ABOUT'/>
      </Box>
      <Box sx={{width: '30%', margin: 'auto', textAlign:'center'}}>
      <About/>
      </Box>
      </Container>

      <Container maxWidth={false} disableGutters sx={{backgroundColor: 'black', p: '10px'}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='ABOUT'/>
      </Box>
      <Box sx={{width: '30%', margin: 'auto', textAlign:'center'}}>
      <About/>
      </Box>
      </Container>
      
    </div>
  )
  
}


