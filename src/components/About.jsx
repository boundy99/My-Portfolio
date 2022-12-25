import React from 'react'

export default function About(props) {
  return (
    <div className='about'>
    <textarea>{props.text}</textarea>
    </div>
  )
}
