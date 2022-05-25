import { Row, Col, Container } from "react-bootstrap"
import CardFacility from "../../organism/card/Index"
import Intro from "../../molecules/intro/Index"
import { landscape, slide, pool, canebo, cafe, homestay } from '../../../export/image'

export default function Facility() {
  return (
    <Container className='d-flex align-items-md-center flex-column' >
        <Intro 
            head="Fasilitas"
            desc="Coba fasilitas kita dan rasakan kenyamanan dengan keluarga anda"
        />

        <Row className="pt-5 mt-5 d-flex">
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={landscape}
                    title='Pemandagan'
                    desc='Nikmati pemandangan daripemadian sikabu dengan bukit hijau dan persawahan'
                />
            </Col>
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={slide}
                    title='Seluncuran'
                    desc='Ada dua seluncuran satu untuk dewasa dan lainnya untuk anak-anak'
                />
            </Col>
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={pool}
                    title='Kolam'
                    desc='Berenang dengan air dingin langusng dari air pengunungan'
                />
            </Col>
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={canebo}
                    title='Kanebo'
                    desc='Nikmati kanebo ketika istirahat setelah berenang'
                />
            </Col>
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={cafe}
                    title='Cafe'
                    desc='Pesan dan nikmati layanan dan menu dari cafe kami'
                />
            </Col>
            <Col md={4} className='mb-4'>
                <CardFacility 
                    image={homestay}
                    title='Homestay'
                    desc='Jangan takut ketika hotel di kota sudah penuh, kamijuga menyediakan homestay'
                />
            </Col>
        <hr className='mt-5' />
        </Row>
    </Container>
  )
}


