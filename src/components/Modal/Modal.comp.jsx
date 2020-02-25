import React from 'react';
import { Modal,Button,Container,Row,Col,Carousel,InputGroup,Form } from 'react-bootstrap'
import './Modal.style.scss'

class ItemModal extends React.Component  {
    constructor(props) {
        super(props)
    
        this.state = {
             isExpand : false
        }
    }
    expandToggle = (e) => {
        e.preventDefault()
        let toggle = !this.state.isExpand
     this.setState({isExpand : toggle})
    }
    render(){
        const {show,handleClose,item} = this.props;
    return (
        <Modal className='Modal' show={show} onHide={handleClose} size='xl'>
            <Modal.Header closeButton className='border-0'>
            </Modal.Header>
            <Modal.Body className='overflow-auto'>
                <Container>
                    <Row>
                        <Col md={5}>
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={item.imageUrl}
                            alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={item.imageUrl}
                            alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={item.imageUrl}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>
                        </Col>
                        <Col md={7} className="p-0"> 
                            <h1>{ item.name }</h1>
                            <h5 className="pb-3">{ item.info }</h5>
                            <Container fluid className="">
                                <Row>
                                    <Col className="pb-3" md={4}>key information </Col>
                                    <Col className="pb-3" md={8}>: {item.info}</Col>

                                    <Col  className="pb-3" md={4}>About the Product </Col>
                                    <Col  className="pb-3 overflow-auto text-scroll" md={8}>

                                        <p className= {
                                            (this.state.isExpand)? `mb-0` : `text-truncate mb-0`
                                        }>: {item.about}</p>
                                        <a href="#f" onClick={this.expandToggle }> {
                                             (this.state.isExpand)? `-less` : `+more`
                                        } </a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pb-3" md={4}><p>Country of origin</p></Col>
                                    <Col className="pb-3" md={8}> 
                                        <p>
                                            : {item.origin}
                                        </p>
                                     </Col>
                                </Row>

                            </Container>
                            <Row className='positon-absolute l-0 b-0 testing'>
                                    <Col className="pb-3" md={5}>
                                        
                                        <InputGroup className="mb-3">
                                            <Button className='mr-3 Modal__button'>Qty</Button>
                                            <Form.Control as="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </InputGroup>
                                        
                                    </Col>
                                    <Col className="pb-3" md={7}> 
                                        <p>
                                           <Button className='Modal__button px-5'>ADD TO CART</Button>
                                        </p>
                                     </Col>
                            </Row>    
                            
                        </Col>
                        

                    </Row>
                </Container>
            </Modal.Body>  
        </Modal>
   
    );
}}
export default ItemModal;