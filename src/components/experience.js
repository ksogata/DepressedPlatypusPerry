import React, {Component} from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import qs from 'qs';

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

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
};

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience_name: '',
            desc: '',
            addr1: '',
            addr2: '',
            city: '',
            state: '',
            zip: '',
            eventtags: [],
            capacity: ''
        }
    }

    onClick  = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log(decodeURI(qs.stringify(this.state)));
        let tags = JSON.stringify(this.state.eventtags);
        let {experience_name, desc, addr1, addr2, city, state, zip, capacity} = this.state;
        let body = qs.stringify({
            experience_name,
            desc,
            addr1,
            addr2,
            city,
            state,
            zip,
            capacity,
            eventtags: tags
        })
        
        axios.post("http://localhost:5000/api/event", body, {headers})
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                  }
            });
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    addTags = (newValue, actionMeta) => {
      console.group('Value Changed');
      console.log(newValue);
      var transformed  = newValue.map(element => {
        return element.label;
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
                <Label for="experience_name">Experience Name</Label>
                <Input onChange={this.handleChange} type="text" name="experience_name" id="expName" value={this.state.experience_name}/>
              </FormGroup>
              <FormGroup>
                <Label for="desc">Desc</Label>
                <Input onChange={this.handleChange} type="textarea" name="desc" id="desc" value={this.state.desc}/>
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
                <Label for="addr1">Address</Label>
              <Input onChange={this.handleChange} type="text" name="addr1" id="addr1" placeholder="1234 Main St" value={this.state.addr1}/>
              </FormGroup>
              <FormGroup>
                <Label for="addr2">Address 2</Label>
                <Input onChange={this.handleChange} type="text" name="addr2" id="addr2" placeholder="Apartment, studio, or floor" value={this.state.addr2}/>
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
            <Button 
                color="primary"
                onClick={this.onClick}
            >
                Submit
            </Button><br/><br/>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
};

export default Experience;
