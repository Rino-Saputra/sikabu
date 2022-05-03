import React from 'react'

export default function AnchorText(props) {

  const { text } = props;

  return (
    <li className='fs-6 text-danger'> {text } </li>
  )
}
