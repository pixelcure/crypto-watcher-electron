import React from 'react';
import ReactDOM from 'react-dom';
import Settings from './Settings';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Settings />, section);
});
