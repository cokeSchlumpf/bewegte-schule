import './styles.css';

import { Grid, Image, Segment } from 'semantic-ui-react'

import React from 'react';
import imgParagraph from './images/title.png';

const LoginGrid = ({ message, children }) => {
  return (
    <Grid className="logingrid" verticalAlign="middle" container centered>
      <Grid.Column>
        <Image src={imgParagraph} size="medium" />
        <p className="logingrid-subtitle">
          Studie zum Gesundheitsverhalten und zur körperlichen Fitness<br />bei Schüler/innen der Klassenstufe 5
        </p>
        { message }
        <Segment.Group>
          {children}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  )
}

export default LoginGrid;
