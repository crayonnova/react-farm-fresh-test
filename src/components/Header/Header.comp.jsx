import React from 'react';
import './Header.style.scss'
import Logo from '../../assets/logo.png'
import cart from '../../assets/shopping-cart.png'
import banner from '../../assets/banner.jpg'
import { Container,Row,Col,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
const Header = () => {
    return (
<>
    <Navbar bg="light" expand="lg" fixed={"top"}>
    <Navbar.Brand href="#home">
        <img
            alt=""
            src={Logo}
            height="60"
            className="d-inline-block align-top"
        />{' '}
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">  
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
        </Nav>
        <img src={cart} width="40px" alt=""/>
    </Navbar.Collapse>
    </Navbar>

    <Container fluid>
        <Row>
            <Col md={12} className="p-0">
                <img src={banner} width="100%" alt=""/>
            </Col>
        </Row>
    </Container>
    
</>
    );
}

export default Header;
