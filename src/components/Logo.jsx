import React from 'react'

export default function Logo(props) {
  if (props.logo) {
    return <img src={props.logo} alt="logo" />;
  }
  return null;
}

