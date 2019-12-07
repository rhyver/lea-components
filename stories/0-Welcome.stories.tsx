import React from 'react';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <div>
  <h1>Lea Components</h1>
</div>;

toStorybook.story = {
  name: 'to Storybook',
};
