import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const styles = {
    banner: {
      background: "url('spring-4072393_1920.jpg')"
    }
}

const Experience = () => {
    return (
      <div>
        <h1 style={styles.banner}>Add an Experience</h1>
        <Container>
          <Row>
            <Col>
              <Form>
              <FormGroup>
                <Label for="expName">Experience Name</Label>
                <Input type="email" name="email" id="expName" />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" />
              </FormGroup>
              </Form>
              <Row form>
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
            </Col>
            <Col>
              <Form>
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
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary">Submit</Button><br/>
          </Col>
        </Row>
      </Container>
    </div>
    )
};

export default Experience;
