import React, { useState } from 'react'

export default function AnchorText(props) {

  const { text } = props;

  return (
      <li className='fs-6' style={{color: '#0098ef', cursor: 'pointer'}}>
          {text }
      </li>
  )
}
