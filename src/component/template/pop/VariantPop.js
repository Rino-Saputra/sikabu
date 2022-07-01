import React, { useState, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function VariantPop(props) {

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" variant='primary'>
        Ticket
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Regular</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}