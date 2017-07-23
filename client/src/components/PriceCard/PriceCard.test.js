import React from 'react';
import ReactDOM from 'react-dom';
import PriceCard from './PriceCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PriceCard />, div);
});
