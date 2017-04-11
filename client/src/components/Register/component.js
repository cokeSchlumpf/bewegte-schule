import { Button, Form, Header, Icon, Message, Segment } from 'semantic-ui-react'

import LoginGrid from '../../elements/LoginGrid';
import React from 'react';
import _ from 'lodash';
import noop from '../../utils/noop';
import { onFormValueChangeHandler } from '../../utils/react-utils';

const Login = ({ error, isLoading = false, pseudonym = 'no_name', value = {}, onSubmit = noop, onValueChange = noop }) => {
  const onSubmitHandler = (event) => {
    onSubmit();
    event.stopPropagation();
    event.preventDefault();
  };

  const onValueChangeHandler = onFormValueChangeHandler(value, onValueChange);

  const arePasswordsEqual = () =>
    _.size(_.trim(value.password) || '') > 0
    && _.size(_.trim(value.passwordRepeat) || '') > 0
    && _.isEqual(value.password, value.passwordRepeat);

  const buttonText = () =>
    (!arePasswordsEqual()
      && _.size(value.password || '') > 0
      && _.size(value.passwordRepeat || '') > 0
      && 'Die angegebenen Passwörter stimmen nicht überein')
    || 'Registrierung abschließen';

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
          <b>Notiere dir dein Pseudonym gut!</b> Du brauchst es bei jeder Befragung und Untersuchung während der Studie. Es kann nicht erneut angefordert oder zurückgesetzt werden.
        </p>
      </Segment>
      <Segment>
        <Form
          onSubmit={onSubmitHandler}
          error={!_.isUndefined(error)}>

          <p>
            Erstelle dir ein Passwort und notiere auch dieses gut! Es kann nicht zurückgesetzt werden. Auch dieses brauchst für jede (Online-)Befragung und zur Anmeldung auf dem Online-Portal.
          </p>
          <Form.Input
            label="Passwort" type="password" icon="lock" iconPosition="left"
            value={value.password} onChange={onValueChangeHandler('password')} />

          <Form.Input
            label="Passwort wiederholen" type="password" icon="lock" iconPosition="left"
            value={value.passwordRepeat} onChange={onValueChangeHandler('passwordRepeat')} />

          {error && <Message error content={error} />}

          <Button
            type="submit"
            onClick={onSubmitHandler}
            primary
            disabled={!arePasswordsEqual()}
            loading={isLoading}>
            {buttonText()}
          </Button>
        </Form>
      </Segment>
    </LoginGrid>
  )
}

export default Login;
