import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { Container } from "reactstrap";

const styles = {
    banner: {
      background: "url('spring-4072393_1920.jpg')"
    }
}

const Profile = () => {
    return (
      <div>
        <h1 style={styles.banner}>Profile</h1>
        <Container>
          <p></p>
        </Container>
      </div>
    );
};

export default Profile;