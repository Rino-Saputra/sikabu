import React from 'react'
import './style.css'

export default function ButtonText( { styles, type, text } ) {
  if( styles === undefined ){ styles='order' }
  if( type === undefined ){ type=''}
  return (
    <button className={`${styles}`} type={`${type}`} >{text}</button>
  )
}
