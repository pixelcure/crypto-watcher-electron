import React from 'react';
import ReactDOM from 'react-dom';
import Cost from './Cost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cost />, div);
});
