import React from 'react'
import { Dropdown } from 'react-bootstrap'
import SvgIcon from '../../atoms/iconSVG'

export default function UserDroDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" variant="transparant">
        <SvgIcon name='user' color='black'/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
          <Dropdown.Item href="#/action-2">History Ticket</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}