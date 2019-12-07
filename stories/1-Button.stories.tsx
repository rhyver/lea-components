import React from 'react';
import { action } from '@storybook/addon-actions';
import { LeaButton } from '../src/Button/Button'
export default {
  title: 'Button',
};

export const text = () => <>
  <LeaButton color='primary' onClick={action('clicked')}>Hello Button</LeaButton>
  <LeaButton color='primary' disabled>Disabled</LeaButton>
</>
