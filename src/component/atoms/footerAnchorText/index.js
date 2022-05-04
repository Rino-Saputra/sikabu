import React from 'react'

export default function AnchorText(props) {

  const { text } = props;

  return (
    <li className='fs-6' style={{color: '#f96900'}}> {text } </li>
  )
}
