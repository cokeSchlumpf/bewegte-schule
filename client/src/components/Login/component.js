import { Button, Divider, Form, Icon, Message, Segment } from 'semantic-ui-react'
import React, { PropTypes } from 'react';

import LoginGrid from '../../elements/LoginGrid';
import _ from 'lodash';
import noop from '../../utils/noop';
import { onFormValueChangeHandler } from '../../utils/react-utils';

const Login = ({ errors = {}, isLoading = {}, registerSuccess, value = {}, onValueChange = noop, onLoginClick = noop, onCreatepseudonymClick = noop }) => {
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

  const codeFormError = !_.isUndefined(errors.code);

  const loginFormError = !_.isUndefined(errors.login);

  const errormessage = (message) => message && <Message error content={message} />;

  const renderRegisterSuccessMessage = () => registerSuccess && (
    <Message icon positive>
      <Icon name='checkmark' />
      <Message.Content>
        <Message.Header>Pseudonym erfolgreich erstellt</Message.Header>
        Ab sofort kannst du dich mit deinem Pseudonym und deinem Benutzername hier anmelden.
    </Message.Content>
    </Message>
  );

  return (
    <LoginGrid message={renderRegisterSuccessMessage()}>
      <Segment>
        <Form onSubmit={onLoginClickHandler} error={loginFormError}>
          <Form.Input
            placeholder="Pseudonym" icon="user" iconPosition="left"
            value={value.pseudonym} onChange={onValueChangeHandler('pseudonym')} />

          <Form.Input
            placeholder="Passwort" type="password" icon="lock" iconPosition="left"
            value={value.password} onChange={onValueChangeHandler('password')} />

          {errormessage(errors.login)}

          <Button
            type="submit"
            loading={isLoading.login}
            disabled={isLoginDisabled()}
            primary
            onClick={onLoginClickHandler}>Anmelden</Button>
        </Form>
        <Divider horizontal>oder</Divider>
        <Form onSubmit={onCreatepseudonymClickHandler} error={codeFormError}>
          <Form.Input
            placeholder="Codewort" icon="asterisk" iconPosition="left"
            value={value.code} onChange={onValueChangeHandler('code')} />

          {errormessage(errors.code)}

          <Button
            type="submit"
            loading={isLoading.code}
            disabled={isCreatepseudonymDisabled()}
            onClick={onCreatepseudonymClickHandler}>
            Pseudonym erstellen
          </Button>
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
