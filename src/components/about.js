import React, { Component } from 'react';
import { isAbsolute } from 'path';
import { Container } from 'reactstrap';

const styles = {
  banner: {
    background: "url('spring-4072393_1920.jpg')"
  }
}

const About = () => {
    return (
      <div>
        <h1 style={styles.banner}>About</h1>
        <Container>
          <p></p>
        </Container>
      </div>
    )
};

export default About;
