import './styles.css';

import { Button, Divider, Form, Grid, Image, Segment } from 'semantic-ui-react'

import React from 'react';
import imgParagraph from './images/media-paragraph.png';

const Login = () => {
  return (
    <Grid className="login-grid" verticalAlign="middle" container centered>
      <Grid.Column>
        <Image src={ imgParagraph } size="medium" />
        <Segment>
          <Form>
            <Form.Input placeholder="Pseudonym" icon="user" iconPosition="left" />
            <Form.Input placeholder="Passwort" type="password" icon="lock" iconPosition="left" />
            <Button type="submit" primary>Anmelden</Button>
          </Form>
          <Divider horizontal>oder</Divider>
          <Form>
            <Form.Input placeholder="Codewort" icon="asterisk" iconPosition="left" />
            <Button type="submit">Pseudonym erstellen</Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Login;
