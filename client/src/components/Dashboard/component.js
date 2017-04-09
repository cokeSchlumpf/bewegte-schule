import { Button, Header, Icon, Segment } from 'semantic-ui-react'
import React, { PropTypes } from 'react';

import { CheckAuth } from '../Auth';
import LoginGrid from '../../elements/LoginGrid';
import _ from 'lodash';
import noop from '../../utils/noop';

const Dashboard = ({ onLogoutClick = noop, onSurveyButtonClick = noop }, { auth }) => {
  return (
    <CheckAuth>
      <LoginGrid>
        <Segment>
          <Header size="large">
            <Icon name="user" />
            <Header.Content>
              <Header.Subheader>
                Hallo
              </Header.Subheader>
              {_.get(auth, 'user.pseudonym', 'n/a')}
            </Header.Content>
          </Header>
          <p>
            Du befindest dich im vorläufigen Online-Portal der Studie. In wenigen Sekunden wirst du zum ersten Fragebogen weitergeleitet.
          </p>
          <p>
            Solltest du nicht automatisch weitergeleitet werden, klicke den unten stehenden Button.
          </p>
        </Segment>
        <Segment>
          <Button primary onClick={ onSurveyButtonClick }>
            Zum ersten Evaluations-Fragebogen
          </Button>
        </Segment>
        <Segment>
          <Button primary onClick={ onLogoutClick }>
            Abmelden
          </Button>
        </Segment>
      </LoginGrid>
    </CheckAuth>
  );
}

Dashboard.contextTypes = {
  auth: PropTypes.object
}

module.exports = Dashboard;