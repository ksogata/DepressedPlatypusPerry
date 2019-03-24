import React, { Component } from 'react';
import { Button, Form } from 'reactstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <div className="Login">
            <Form>
              <Form.Group controlId="email" bsSize="large">
                <Form.Control
                  autoFocus
                  type="email"
                  value={this.state.email}
                //   onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password" bsSize="large">
                <Form.Control
                  value={this.state.password}
                //   onChange={this.handleChange}
                  type="password"
                />
              </Form.Group>
              <Button
                block
                bsSize="large"
                // disabled={!this.validateForm()}
                onClick={this.props.login}
                type="submit"
              >
                Login
              </Button>
            </Form>
          </div>
        )
    }
};