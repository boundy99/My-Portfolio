import React from 'react'
import { Container, Typography } from '@mui/material';

export default function Section(props) {
  return (
    <Container sx={{fontSize: '30px', textAlign: 'center', fontWeight: '400', p: '30px'}}>
        <Typography variant='inherit'>{props.text}</Typography>
    </Container>
    
  )
}
