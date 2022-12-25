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
      <Container  className='container' maxWidth={false} disableGutters sx={{backgroundColor: '#212121', p: '10px', mt: '64px', mr: '0px'}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='ABOUT'/>
      </Box>
      <Box sx={{width: '45%', margin: 'auto', textAlign:'center'}}>
      <About/>
      </Box>
      </Container>

      <Container  className='container' maxWidth={false} disableGutters sx={{backgroundColor: '#757575', p: '10px',}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='PROJECTS'/>
      </Box>
      <Box sx={{width: '55%', margin: 'auto', textAlign:'center'}}>
      <About/>
      </Box>
      </Container>

      <Container  className='container' maxWidth={false} disableGutters sx={{backgroundColor: 'red', p: '10px'}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='ABOUT'/>
      </Box>
      <Box sx={{width: '55%', margin: 'auto', textAlign:'center'}}>
      <About/>
      </Box>
      </Container>
      
    </div>
  )
  
}


