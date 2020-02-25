import React, { Component } from 'react';
import { Container,Row,Col,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import SideBanner from '../../assets/side-banner.png'
import clock from '../../assets/clock.png'
import truck from '../../assets/delivery-truck.png'
import support from '../../assets/support.png'

export class Promotion extends Component {
    render() {
        return (
           <Container fluid>
               <Row className='m-0'>
                   <Col md={6}>
                       <h1>FRESH FOOD FOR A FRESHER YOU</h1>
                       <h2>Quality Food,Quality Life</h2>
                   </Col>
                   <Col md={6}>
                       <img src={SideBanner} className="w-100" alt=""/>
                   </Col>
               </Row>
               <Row>
                   <Col md={4}>
                       <img src={clock} width="100px" alt=""/>
                       Online anywhere
                   </Col>
                   <Col md={4}>
                   <img src={truck} width="100px" alt=""/>
                       First delivery
                   </Col>
                   <Col md={4} className="p-0">
                   <img src={support} width="100px" alt=""/>
                       24/7 Support
                   </Col>
               </Row>
           </Container>
        );
    }
}

export default Promotion;
