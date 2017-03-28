import './styles.css';

import { Button, Input, Menu } from 'semantic-ui-react'
import { Container, Step } from 'semantic-ui-react'

import HelloWorld from '../HelloWorld';
import ProjectSelection from '../projectselection';
import ProjectTree from '../projecttree';
import React from 'react';

const steps = [
  { completed: true, title: 'Shipping', description: 'Choose your shipping options' },
  { completed: true, title: 'Billing', description: 'Enter billing information' },
  { active: true, title: 'Confirm Order', description: 'Verify order details' },
]

const App = () => {
  return (
    <div className="app-container">
      
    </div>
  );
}

export default App;
