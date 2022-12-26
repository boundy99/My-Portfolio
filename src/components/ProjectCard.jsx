import React from 'react'
import Logo from './Logo'
import { Card, CardContent,  Typography, Container, Box, Grid} from '@mui/material';

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
    <Grid container sx= {{justifyContent:'center'}}>
      <Grid item>
      <Logo logo={props.logoHTML}/> 
      </Grid>

      <Grid item>
      <Logo logo={props.logoCSS}/> 
      </Grid>

      <Grid item>
      <Logo logo={props.logoJs}/> 
      </Grid>

      <Grid item>
      <Logo logo={props.logoEJs}/> 
      </Grid>

      <Grid item>
      <Logo logo={props.logoReact}/> 
      </Grid>

      <Grid item>
      <Logo logo={props.logoNodeJs}/> 
      </Grid>

      <Grid item>
      <Logo logo={props.logoMongoDB}/> 
      </Grid>
    </Grid>
    
   
    </Box>
    
    
    </CardContent>
    
    </Card></Container>
    
    </div>
  )
}
