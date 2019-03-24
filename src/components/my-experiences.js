import React from 'react';
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const styles = {
    banner: {
      background: "url('spring-4072393_1920.jpg')"
    }
}

const MyExperiences = () => {
    return (
      <div>
        <h1 style={styles.banner}>My Experiences</h1>
        <Container>
        <h2>Upcoming Events</h2>
        <Row>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">View Details</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">View Details</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">View Details</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/>
        <h2>Past Events</h2>
        <Row>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">View Details</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">View Details</Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="primary">View Details</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/>
      </Container>
      </div>
    )
};

export default MyExperiences;
