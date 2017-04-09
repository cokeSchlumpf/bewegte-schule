import './styles.css';

import { Grid, Image, Segment } from 'semantic-ui-react'

import React from 'react';
import imgParagraph from './images/media-paragraph.png';

const LoginGrid = ({ message, children }) => {
  return (
    <Grid className="logingrid" verticalAlign="middle" container centered>
      <Grid.Column>
        <Image src={imgParagraph} size="medium" />
        { message }
        <Segment.Group>
          {children}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  )
}

export default LoginGrid;
