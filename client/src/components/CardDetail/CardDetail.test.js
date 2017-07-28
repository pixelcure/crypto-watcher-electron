import React from 'react';
import ReactDOM from 'react-dom';
import CardDetail from './CardDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardDetail />, div);
});
