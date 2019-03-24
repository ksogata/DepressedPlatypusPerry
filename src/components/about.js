import React, { Component } from 'react';
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
          <p>Having positive social interactions is important for our health and well-being. Social isolation, on the other hand, is associated with many negative health outcomes, and some studies have suggested that the impact of isolation and loneliness is just as high as risk factors such as high blood pressure, obesity, and smoking.</p>
          <p>[app name here] is designed to help connect people who share similar interests, with a focus on mental health and providing that human connection with others who may have experienced similar situations. We hope that through encouraging people to go out and do activities with other like-minded individuals, this will help increase meaningful social interactions and have a positive influence on people who may be struggling with isolation and loneliness.</p>
        </Container>
      </div>
    )
};

export default About;
