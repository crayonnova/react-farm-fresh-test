import React from 'react';
import { Container,Row,Col,Dropdown,DropdownButton} from 'react-bootstrap'
import Items from './../../items'
import './Store.style.scss'

import ItemModal from '../Modal/Modal.comp'
class Store extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             modalShow : false,
             item: {},
             items : []
        }
    }
    componentDidMount  () {
        this.setState({items: Items})
    }
    render(){
    const Items = this.state.items;
    
    return (
        <Container fluid className='Store p-0'>
           
            <Row className='m-0'>
                <Col  className="Store__sidebar py-4 px-0"  md={3}>
                <DropdownButton title="On sale!" id="dropdown-button-drop-right" drop='right'  >
                    <Dropdown.Item href="#/action-1">Place order</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">checkout</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"> something</Dropdown.Item>
                </DropdownButton>

                <DropdownButton title="New" id="dropdown-button-drop-right" drop='right'  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton title="Shop by Store" id="dropdown-button-drop-right" drop='right'  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton title="Frusit vs Veg" id="dropdown-button-drop-right" drop='right'  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton title="Meat & Seadfood" id="dropdown-button-drop-right" drop='right'  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton title="Diary and Chilled" id="dropdown-button-drop-right" drop='right'  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton title="Bakery" id="dropdown-button-drop-right" drop='right'  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton title="Beverages" id="dropdown-button-drop-right" drop='right'  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>


                </Col>
                <ItemModal show={this.state.modalShow} handleClose={ () => this.setState({modalShow : false})} item={this.state.item}></ItemModal>
                <Col md={9} className='Store__content  py-4 px-0'>
                
                    <Col md={10} className="offset-md-1 offset-sm-0 p-0">
                        <Row className="m-0">
                        
                        {
                            Items.map( (item) => 
                           
                            <Col key={item.id} md={4} sm={6} className="Card justify-content-center mb-4 px-sm-5 p-md-3">
                                <img onClick={ () => this.setState({modalShow : true,item })} className="Card__img w-100" alt={item.name} src={item.imageUrl}/>
                                <p className="mb-0 font-weight-bolder pl-4">{item.name}</p>
                                <span className="font-weight-bold text-muted pl-4">{item.category}</span>
                            </Col>
                            
                            )
                        }
                        </Row>
                    </Col>
                </Col>
            </Row>
            
        </Container>
        
    );
    }
}

export default Store;
