import { Button, Container, Form, Header, Icon, Segment } from 'semantic-ui-react'

import LoginGrid from '../../elements/LoginGrid';
import React from 'react';

const Login = () => {
  return (
    <LoginGrid>
      <Segment>
        <Header size="large">
          <Icon name="user" />
          <Header.Content>
            <Header.Subheader>
              Dein Pseudonym ist
            </Header.Subheader>
            hanky_jordan
          </Header.Content>
        </Header>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </Segment>
      <Segment>
        <Form>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
          </p>
          <Form.Input label="Passwort" type="password" icon="lock" iconPosition="left" />
          <Form.Input label="Passwort wiederholen" type="password" icon="lock" iconPosition="left" />
          <Button type="submit" primary disabled>Registrierung abschließen</Button>
        </Form>
      </Segment>
    </LoginGrid>
  )
}

export default Login;
