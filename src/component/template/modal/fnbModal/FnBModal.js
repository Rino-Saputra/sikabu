import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.css'

export default function FnBModal(props) {

  return (
    <Modal 
      show={props.show} 
      onHide={props.handleClose} 
      centered 
    >
      <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
      <Modal.Body className='text-center modal-contents bg-transparent'>
        <img src={props.image} className='img-fnb img-fluid' alt="" />
      </Modal.Body>
    </Modal>
  )
}
