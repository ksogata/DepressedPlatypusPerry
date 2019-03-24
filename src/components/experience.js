import React, {Component} from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const styles = {
    banner: {
      background: "url('spring-4072393_1920.jpg')"
    }
}

const labelOptions = [
  { value: 't01', label: 'Anxiety' },
  { value: 't02', label: 'Stress' },
  { value: 't03', label: 'Netowrking' }
];

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            eventtags: '',
            capacity: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    addTags = (newValue, actionMeta) => {
      console.group('Value Changed');
      console.log(newValue);
      var transformed  = newValue.map(element => {
        return {[element.value]: element.label}
      })
      console.log("tags", transformed)
      this.setState({"eventtags": transformed})
    };
    
    render() {
    return (
      <div>
        <h1 style={styles.banner}>Host an Experience</h1>
        <Container>
          <Row>
            <Col>
              <Form>
              <FormGroup>
                <Label for="expName">Experience Name</Label>
                <Input onChange={this.handleChange} type="expName" name="expName" id="expName" value={this.state.name}/>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input onChange={this.handleChange} type="textarea" name="description" id="description" value={this.state.description}/>
              </FormGroup>
              </Form>
              <Row form>
                <Col md={10}>
                  <FormGroup>
                  <Label for="tags">Tags</Label>
                  <CreatableSelect
                    isMulti
                    onChange={this.addTags}
                    options={labelOptions}
                  />
                </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="capacity">Capacity</Label>
                    <Input onChange={this.handleChange} type="number" name="capacity" id="capacity" value={this.state.capacity}/>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col>
              <Form>
              <FormGroup>
                <Label for="address">Address</Label>
              <Input onChange={this.handleChange} type="text" name="address" id="address" placeholder="1234 Main St" value={this.state.address1}/>
              </FormGroup>
              <FormGroup>
                <Label for="address2">Address 2</Label>
                <Input onChange={this.handleChange} type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor" value={this.state.address2}/>
              </FormGroup>
              <Row form>
                <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input onChange={this.handleChange} type="text" name="city" id="city" value={this.state.city}/>
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input onChange={this.handleChange} type="text" name="state" id="state" value={this.state.state}/>
                </FormGroup>
                </Col>
                <Col md={2}>
                <FormGroup>
                  <Label for="zip">Zip</Label>
                  <Input onChange={this.handleChange} type="text" name="zip" id="zip" value={this.state.zip}/>
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
    }
};

export default Experience;
