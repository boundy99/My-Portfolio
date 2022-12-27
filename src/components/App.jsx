import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import About from './About';
import ProjectCard from './ProjectCard';
import data from '../data';

import { Container, Box } from '@mui/material';

function createProjectCard(data) {
  return (
    <ProjectCard
      key={data.id}
      name={data.name}
      description={data.description}
      logoHTML={data.logoHTML}
      logoCSS={data.logoCSS}
      logoJs={data.logoJs}
      logoEJs={data.logoEJs}
      logoReact={data.logoReact}
      logoNodeJs={data.logoNodeJs}
      logoMongoDB={data.logoMongoDB}
    />
  );
}
export default function App() {
  return (
    <Container disableGutters maxWidth={false}>
      {/* ---------------Navbar--------------- */}
      <Navbar />

      {/* ---------------About--------------- */}
      <Container
        maxWidth={false}
        sx={{ backgroundColor: 'black', p: '10px', mt: '64px', mr: '0px' }}
      >
        <Box sx={{ width: '25%', margin: 'auto' }}>
          <Section text="ABOUT" />
        </Box>

        <Box
          sx={{
            margin: 'auto',
            textAlign: 'center',
            justifyContent: 'center',
            maxWidth: '677px'
          }}
        >
          <About />
        </Box>
      </Container>

      {/* ---------------Projects--------------- */}

      <Container
        maxWidth={false}
        sx={{ backgroundColor: '#212121', p: '10px' }}
      >
        <Box sx={{ width: '25%', margin: 'auto' }}>
          <Section text="PROJECTS" />
        </Box>

        <Box sx={{ justifyContent: 'center', margin: 'auto', width: '50%' }}>
          {data.map(createProjectCard)}
        </Box>
      </Container>
    </Container>
  );
}
