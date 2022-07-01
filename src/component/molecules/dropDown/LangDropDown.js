import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './style.css'

export default function LangDropDown() {
  return (
    <select className='fw-bold text-secondary'>
      <option selected>id</option>
      <option>en</option>
    </select>
  )
}
