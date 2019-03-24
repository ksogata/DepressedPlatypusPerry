import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expName: '',
            description: '',
            address: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            tags: '',
            capacity: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <Container>
                <h1>Add an Experience</h1>
                <Form>
                    <FormGroup>
                        <Label for="expName">Experience Name</Label>
                        <Input type="text" name="expName" id="expName" value="expName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" name="description" id="description" value="description"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" id="address" placeholder="1234 Main St" value="address"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="address2">Address 2</Label>
                        <Input type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor" value="address2"/>
                    </FormGroup>
                    <Row form>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" value="city"/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                        <Label for="state">State</Label>
                        <Input type="text" name="state" id="state" value="state"/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                        <Label for="zip">Zip</Label>
                        <Input type="text" name="zip" id="zip" value="zip"/>
                        </FormGroup>  
                    </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <FormGroup>
                                <Label for="tags">Tags</Label>
                                <Input type="text" name="tags" id="tags" value="tags"/>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="capacity">Capacity</Label>
                                <Input type="number" name="capacity" id="capacity" value="capacity"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
};

export default Experience;
