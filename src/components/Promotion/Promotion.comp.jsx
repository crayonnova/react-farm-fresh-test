import React, { Component } from 'react';
import { Container,Row,Col,Card,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import SideBanner from '../../assets/side-banner.png'
import clock from '../../assets/clock.png'
import truck from '../../assets/delivery-truck.png'
import support from '../../assets/support.png'
import './Promotion.style.scss'
export class Promotion extends Component {
    render() {
        return (
           <Container fluid>
               <Row className='mx-0 my-3'>
                   <Col md={6}>
                    
                       <h1>FRESH FOOD FOR A FRESHER YOU</h1>
                       <h2>Quality Food,Quality Life</h2>
                   </Col>
                   <Col md={6}>
                       <img src={SideBanner} className="w-100" alt=""/>
                   </Col>
               </Row>
               <Row>
                   <Col md={4} className='p-0'>
                   <Card className='text-center PromotionCard border-0'>
                        
                        <Card.Body>
                        <Card.Img variant="top" src={clock} />
                        <Card.Title><h2>Online anywhere</h2></Card.Title>
                        
                        </Card.Body>
                    </Card> 
                       {/* <img src={clock} width="100px" alt=""/>
                       Online anywhere */}
                   </Col>
                   <Col md={4} className='p-0'>
                   <Card className='text-center PromotionCard border-0'>
                        
                        <Card.Body>
                        <Card.Img variant="top" src={truck} />
                        <Card.Title><h2>Fast Delivery</h2></Card.Title>
                        
                        </Card.Body>
                    </Card>
                   {/* <img src={truck} width="100px" alt=""/>
                       First delivery */}
                   </Col>
                   <Col md={4} className="p-0">
                   <Card className='text-center PromotionCard border-0'>
                        <Card.Body>
                        <Card.Img variant="top" src={support} />
                        <Card.Title><h2>24/7 Support</h2></Card.Title>
                        
                        </Card.Body>
                    </Card>
                   {/* <img src={support} width="100px" alt=""/>
                       24/7 Support */}
                   </Col>
               </Row>
           </Container>
        );
    }
}

export default Promotion;
