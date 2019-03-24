import React, { Component } from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';

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

    renderTags = (tags) => {
        console.log(tags);

        return tags.map( (tag, index) => (
           <span className="tags" key={index}> <Badge color="primary">{tag}</Badge> </span>)
        );
    }

    render() {
        const {description, eventtags, host, location, name, photo, state, users, zipcode} = this.props;
        return (
            <Col sm={4}>
                <Card>
                    <CardImg top width="100%" src={photo} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle>{location}</CardSubtitle>
                        {this.renderTags(eventtags)}
                        <CardText>{description}</CardText>
                    <Button onClick={this.toggle}>View Details</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{name}</ModalHeader>
                    <ModalBody>
                        {description} {eventtags} {host} {location} {state} {zipcode} {users}
                        <img src={photo} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Join</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </CardBody>
                </Card>
            </Col>
        )
    }
}
MyCard.defaultProps = {
  eventtags: []
};

export default MyCard;