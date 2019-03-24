import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { TextInput } from './helper';

const Experience = () => {
    return (
        <div>
            <h1>Add an Experience</h1>
            <Form>
                <FormGroup>
                    <Label for="expName">Experience Name</Label>
                    <Input type="email" name="email" id="expName" />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">Address 2</Label>
                    <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                </FormGroup>
                <Row form>
                <Col md={6}>
                    <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" id="exampleCity"/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input type="text" name="state" id="exampleState"/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input type="text" name="zip" id="exampleZip"/>
                    </FormGroup>  
                </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <FormGroup>
                            <Label for="tags">Tags</Label>
                            <Input type="text" name="tags" id="tags"/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="capacity">Capacity</Label>
                            <Input type="number" name="capacity" id="capacity"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Button>Submit</Button>
            </Form>
        </div>
    )
};

export default Experience;
