import React from 'react';
import { Container, Row, Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const styles = {
    banner: {
      background: "url('spring-4072393_1920.jpg')"
    },
    missedcard: {
      background: 'lightgoldenrodyellow'
    }
}

const MyExperiences = () => {
    return (
      <div>
        <h1 style={styles.banner}>My Journey</h1>
        <Container>
        <p>
          This is your new type of social media. One that is made by you for your own purpose. No judgement. No social pressure. 
          Note down your feelings, both the lows and the highs. Post photos of your trips and hangouts. 
          Take a look back at your journey through mental health and think about the events you've enjoyed in the past. 
          We will help you revisit your favorite moments from and hope you feel inspired to pursue more journeys. No one should have to feel alone. 
        </p>
        <h2>Moments</h2>
        <Row>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Baseball at the park</CardTitle>
                <CardSubtitle> Moment from 2 weeks ago </CardSubtitle>
                <CardText>Foothil Park</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody style={ styles.missedcard }>
                <CardTitle><p><em>Today: Hey, we missed you yesterday at "Movie Night"</em></p></CardTitle>
                <CardSubtitle><p><em>Let us know if you're feeling okay.</em></p><br/></CardSubtitle>
                <CardText>
                  <p><em>Posted 4 hours ago:</em> I was feeling a lot of anxiety about going to the movie theater</p><br/>
                  <Form>
                    <FormGroup>
                      <Input type="textarea" name="description" id="description" />
                    </FormGroup>
                    <Button color="primary">Add a note</Button><br/>
                  </Form>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Beach life!</CardTitle>
                <CardSubtitle>Moment from 1 week ago</CardSubtitle>
                <CardText>From the event "Santa Cruz Beach day"</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Board games are probably my new favorite pasttime</CardTitle>
                <CardSubtitle>Posted just now</CardSubtitle>
                <CardText>From the event "Board Game Night"</CardText>
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
