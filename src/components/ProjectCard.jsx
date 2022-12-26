import React from 'react'
import Logo from './Logo'
import { Card, CardContent,  Typography, Container, Box} from '@mui/material';

export default function ProjectCard(props) {
  return (
    <div>
    <Container maxWidth={false} disableGutters>
    <Card sx={{borderRadius: '20px'}}>

    <Box sx={{textAlign: 'center'}}>
    
    <Typography variant="h4" sx={{pt: '25px', color: 'white', backgroundColor:'#f50057'}}> {props.name}</Typography>
    </Box>

    
    <CardContent>
    <Typography variant="h5" sx={{pb: '15px', textAlign:'center', color: '#01579b'}}>DESCRIPTION </Typography>
    <Typography variant="h6" sx={{pb: '15px', textAlign:'center'}}>{props.description}</Typography>
    <Typography variant="h5" sx={{pb: '15px', textAlign:'center', color: '#01579b'}}>TOOLS USED </Typography>

    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
    <Logo logo={props.logoHTML}/> 
    <Logo logo={props.logoCSS}/>
    <Logo logo={props.logoJs}/>
    <Logo logo={props.logoEJs}/>
    <Logo logo={props.logoReact}/>
    <Logo logo={props.logoNodeJs}/>
    <Logo logo={props.logoMongoDB}/>
    </Box>
    
    
    </CardContent>
    
    </Card></Container>
    
    </div>
  )
}
