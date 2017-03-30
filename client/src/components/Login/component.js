import { Button, Divider, Form, Segment } from 'semantic-ui-react'
import React, { PropTypes } from 'react';

import LoginGrid from '../../elements/LoginGrid';
import _ from 'lodash';
import noop from '../../utils/noop';
import { onFormValueChangeHandler } from '../../utils/react-utils';

const Login = ({ value = {}, onValueChange = noop, onLoginClick = noop, onCreatepseudonymClick = noop }) => {
  const onLoginClickHandler = (event) => {
    onLoginClick();
    event.stopPropagation();
    event.preventDefault();
  };

  const onCreatepseudonymClickHandler = (event) => {
    onCreatepseudonymClick();
    event.stopPropagation();
    event.preventDefault();
  }

  const onValueChangeHandler = onFormValueChangeHandler(value, onValueChange);

  const isLoginDisabled = () =>
    !(_.isString(value.pseudonym) && _.size(value.pseudonym) > 0
      && _.isString(value.password) && _.size(value.password) > 0);

  const isCreatepseudonymDisabled = () =>
    !(_.isString(value.code) && _.size(value.code) > 0);

  return (
    <LoginGrid>
      <Segment>
        <Form onSubmit={onLoginClickHandler}>
          <Form.Input
            placeholder="Pseudonym" icon="user" iconPosition="left"
            value={value.pseudonym} onChange={onValueChangeHandler('pseudonym')} />

          <Form.Input
            placeholder="Passwort" type="password" icon="lock" iconPosition="left"
            value={value.password} onChange={onValueChangeHandler('password')} />

          <Button type="submit" disabled={isLoginDisabled()} primary onClick={onLoginClickHandler}>Anmelden</Button>
        </Form>
        <Divider horizontal>oder</Divider>
        <Form onSubmit={onCreatepseudonymClickHandler}>
          <Form.Input
            placeholder="Codewort" icon="asterisk" iconPosition="left"
            value={value.code} onChange={onValueChangeHandler('code')} />

          <Button type="submit" disabled={isCreatepseudonymDisabled()} onClick={onCreatepseudonymClickHandler}>Pseudonym erstellen</Button>
        </Form>
      </Segment>
    </LoginGrid>
  )
}

Login.propTypes = {
  value: PropTypes.object,

  onValueChange: PropTypes.func,
  onLoginClick: PropTypes.func,
  onCreatepseudonymClick: PropTypes.func
};

export default Login;
