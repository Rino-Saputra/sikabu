import React, { useState } from 'react'
import './style.css'
import TempModal from '../../template/modal/tempModal/TempModal'

export default function ButtonText( { styles, type, text } ) {

  const[show, setShow]=useState(false);

  if( styles === undefined ){ styles='order' }
  if( type === undefined ){ type=''}
  return (
    <>
      <button 
        className={`${styles}`} type={`${type}`} 
        onClick={()=>setShow(!show)}
      >
        {text}
      </button>
      <TempModal 
        handleClose={()=>setShow(!show)} 
        show={show}
      />
    </>
  )
}
