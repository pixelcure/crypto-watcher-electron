import React from 'react';
import ReactDOM from 'react-dom';
import PriceCardDetail from './PriceCardDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PriceCardDetail />, div);
});
