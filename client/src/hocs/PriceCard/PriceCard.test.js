import React from 'react';
import ReactDOM from 'react-dom';
import PriceCard from './PriceCard';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<PriceCard />, section);
});
