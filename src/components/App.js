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
      <Container  className='container' maxWidth={false} disableGutters sx={{backgroundColor: 'red', p: '10px', m: 0}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='ABOUT'/>
      </Box>
      <Box sx={{width: '75%', margin: 'auto', textAlign:'center'}}>
      <About/>
      </Box>
      </Container>
      <Container  className='container' maxWidth={false} disableGutters sx={{backgroundColor: 'pink', p: '10px', m: 0}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='ABOUT'/>
      </Box>
      <Box sx={{width: '75%', margin: 'auto', textAlign:'center'}}>
      <About/>
      </Box>
      </Container>
      <Container  className='container' maxWidth={false} disableGutters sx={{backgroundColor: 'purple', p: '10px', m: 0}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='ABOUT'/>
      </Box>
      <Box sx={{width: '75%', margin: 'auto', textAlign:'center'}}>
      <About/>
      </Box>
      </Container>
    </div>
  )
  
}


