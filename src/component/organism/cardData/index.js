import { Card, Button } from 'react-bootstrap';
import { pool } from '../../../export/image';
import './style.css'

export default function CardData( { image, desc, count } ) {
  return (
    <Card style={{ width: '100%' }} className='border border-light py-4'>
        <img src={image} className='icon-title' />
        <Card.Body className='text-center pt-4'>
            <p className='title-text fs-1'> { count } </p> 
            <Card.Text className='text-secondary fs-4'> {desc } </Card.Text>
        </Card.Body>
        <p><i className='wrench-adjustable'></i></p>
    </Card>
  )
}