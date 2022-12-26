import React from "react"
import Navbar from './Navbar'
import Section from './Section'
import About from "./About"
import ProjectCard from "./ProjectCard"
import data from '../data'

import { 
  Container,
  Box, 
  Grid
} from '@mui/material';

function createProjectCard(data){
  return (
    <ProjectCard 
      key = {data.id}
      name = {data.name}
      description = {data.description}
      logoHTML={data.logoHTML}
      logoCSS={data.logoCSS}
      logoJs={data.logoJs}
      logoEJs={data.logoEJs}
      logoReact={data.logoReact}
      logoNodeJs={data.logoNodeJs}
      logoMongoDB={data.logoMongoDB}
    
    />
  )
}
export default function App() {

  return (
    <div className='app'>
      <Navbar />
      <Container maxWidth={false} disableGutters sx={{backgroundColor: 'black', p: '10px', mt: '64px', mr: '0px'}}>
      <Box sx={{width: '25%', margin: 'auto'}}>
      <Section text='ABOUT'/>
      </Box>
      <Box sx={{width: '50%', margin: 'auto', textAlign:'center'}}>
      <About/>
      </Box>
      </Container>

      <Container maxWidth={false} disableGutters sx={{backgroundColor: '#212121', p: '10px',}}>
      <Box sx={{width: '25%', margin: 'auto'}} >
      <Section text='PROJECTS'/>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row',  justifyContent: 'left', alignItems: 'center' }}>
        <Grid item md={6} sm={10}>
        <Box>
        {data.map(createProjectCard)}
        </Box>
        </Grid>
      </Grid>
      </Box>
      
      
      </Container>
  
    </div>
  )
  
}


