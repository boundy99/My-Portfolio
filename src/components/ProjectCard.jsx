import React from 'react'
import Logo from './Logo'
import { Card, CardContent,  Typography, Container, Box } from '@mui/material';

export default function ProjectCard(props) {
  return (
    <div>
    <Container>
    <Card>

    <Box>
    
    <Typography> {props.name}</Typography>
    </Box>

    <Box>
    <CardContent>
    <Typography>Description: {props.description}</Typography>
    <Typography> Tools used: 
    <Logo logo={props.logo}/> 
    {/* <Logo src={props.logo}/>
    <Logo src={props.logo}/>
    <Logo src={props.logo}/>
    <Logo src={props.logo}/>
    <Logo src={props.logo}/>
    <Logo src={props.logo}/> */}
    </Typography>
    </CardContent>
    </Box>
    </Card></Container>
    
    </div>
  )
}
