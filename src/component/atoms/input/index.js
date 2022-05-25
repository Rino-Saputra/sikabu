import React from 'react'
import './style.css'

export default function InputText(props) {
  return (
    <div>
        <input 
          name={props.name}
          type={props.type} 
          className="form-control input-mod"
          placeholder={props.placeholder} 
          required
          />
    </div>
  )
}
