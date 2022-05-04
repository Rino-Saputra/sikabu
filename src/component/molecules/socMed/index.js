import React from 'react'
import SvgIcon from '../../atoms/iconSVG'

export default function Socmed( { name } ) {
  return (
    <div className='mx-3 mt-3'>
        <SvgIcon name={name} />
    </div>
  )
}
