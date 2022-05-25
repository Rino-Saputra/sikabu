import React from 'react'
import SvgIcon from '../../atoms/iconSVG'

export default function RoomFacilities(props) {
  return (
    <>
        <div className='col-2 me-5'>
            <SvgIcon name='check' iconColor='#f96900' />
        </div>
        <div className='col-8'>
            <p className='fs-5'>{props.title}</p>		
            <p className='fs-6 text-secondary'>{props.desc}</p>		
        </div>
    </>
  )
}
