import React from 'react';
import { Container,Row,Col,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import Items from './../../items'

class Store extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             items : []
        }
    }
    componentDidMount() {
        this.setState({items: Items})
    }
    render(){
    const Items = this.state.items;
    console.log(Items)
    return (
        <Container fluid>
            <Row>
                <Col md={4}>
                    <ul>
                        <li>New</li>
                        <li>New</li>
                        <li>New</li>
                        <li>New</li>
                        <li>New</li>
                        <li>New</li>
                    </ul>
                </Col>
                <Col md={8}>
                
                    <Col md={10} offset={2}>
                        <Row>
                        
                        {
                            Items.map( (item) => 
                            <Col md={4}>
                                <h1>{item.id}</h1> 
                                <img alt="df" width="80px" src={item.imageUrl}/>
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
