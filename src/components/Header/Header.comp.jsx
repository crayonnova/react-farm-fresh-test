import React from 'react';
import './Header.style.scss'
import Logo from '../../assets/logo.png'
import cart from '../../assets/shopping-cart.png'
import search from '../../assets/icons8-search.svg'
import { Container,Row,Col,Navbar,Nav,FormControl,InputGroup} from 'react-bootstrap'
const Header = () => {
    return (
<>
    <Navbar className='Header' bg="light" expand="lg" fixed={"top"}>
    <Navbar.Brand href="#home">
        <img 
            alt=""
            src={Logo}
            height="70"
            className="d-inline-block align-top pl-3"
        />{' '}
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto md-4 my-md-3">  
            <InputGroup className="Header__searchbox ">
                <FormControl
                placeholder="Search for a product or brand"
                />
                <InputGroup.Append>
                <InputGroup.Text id="basic-addon2" className='py-1 px-2 bg-primary'> <img width='25px' src={search} alt=""/> </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </Nav>
          
            {/* <Col md={6} lg={2}> */}
     
               
            {/* </Col> */}
        <img src={cart} width="40px" alt=""/>
    </Navbar.Collapse>
    </Navbar>

    <Container fluid>
        <Row>
            <Col md={12} className="p-0 Banner">
                
            </Col>
        </Row>
    </Container>
    
</>
    );
}

export default Header;
