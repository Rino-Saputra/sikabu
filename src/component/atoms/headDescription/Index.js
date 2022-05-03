import React from 'react'

export default function HeadText( { head, color } ) {
  return (
    <p className={`fs-1 fw-light fst-normal ${color}`}> { head } </p>
  )
}
