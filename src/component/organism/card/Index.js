import { Card, Button } from 'react-bootstrap';
import './style.css'

export default function CardFacility(props) {
  const { image, title, desc } = props;
  return (
    <Card style={{ width: '100%' }} className='rounded-top'>
        <Card.Img variant="top"  className='card-img' src={image} />
        <Card.Body className='text-center'>
            <Card.Title style={{color: '#f17f29'}}> { title } </Card.Title>
            <Card.Text> { desc } </Card.Text>
        </Card.Body>
    </Card>
  )
}
