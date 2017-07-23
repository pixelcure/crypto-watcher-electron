import React from 'react';
import ReactDOM from 'react-dom';
import CryptoPriceCard from './CryptoPriceCard';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<CryptoPriceCard />, section);
});
