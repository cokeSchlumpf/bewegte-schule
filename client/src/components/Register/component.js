import { Button, Form, Header, Icon, Segment } from 'semantic-ui-react'

import LoginGrid from '../../elements/LoginGrid';
import React from 'react';
import _ from 'lodash';
import noop from '../../utils/noop';
import { onFormValueChangeHandler } from '../../utils/react-utils';

const Login = ({ pseudonym = 'no_name', value = {}, onSubmit = noop, onValueChange = noop }) => {
  const onSubmitHandler = (event) => {
    onSubmit();
    event.stopPropagation();
    event.preventDefault();
  };

  const onValueChangeHandler = onFormValueChangeHandler(value, onValueChange);

  const arePasswordsEqual = () =>
    _.size(value.password || '') > 0
    && _.size(value.passwordRepeat || '') > 0
    && _.isEqual(value.password, value.passwordRepeat);

  return (
    <LoginGrid>
      <Segment>
        <Header size="large">
          <Icon name="user" />
          <Header.Content>
            <Header.Subheader>
              Dein Pseudonym ist
            </Header.Subheader>
            {pseudonym}
          </Header.Content>
        </Header>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </Segment>
      <Segment>
        <Form onSubmit={onSubmitHandler}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
          </p>
          <Form.Input
            label="Passwort" type="password" icon="lock" iconPosition="left"
            value={value.password} onChange={onValueChangeHandler('password')} />

          <Form.Input
            label="Passwort wiederholen" type="password" icon="lock" iconPosition="left"
            value={value.passwordRepeat} onChange={onValueChangeHandler('passwordRepeat')} />

          <Button type="submit" onClick={onSubmitHandler} primary disabled={!arePasswordsEqual()}>Registrierung abschließen</Button>
        </Form>
      </Segment>
    </LoginGrid>
  )
}

export default Login;
