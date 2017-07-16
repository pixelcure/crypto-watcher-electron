import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

it('renders without crashing', () => {
  const nav = document.createElement('nav');
  ReactDOM.render(<AppInfo />, nav);
});
