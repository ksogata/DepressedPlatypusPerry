import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

class MyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <Col sm={4}>
                <Card>
                    <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                        <CardText>{this.props.text}</CardText>
                    <Button onClick={this.toggle}>Button</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </CardBody>
                </Card>
            </Col>
        )
    }
}

export default MyCard;