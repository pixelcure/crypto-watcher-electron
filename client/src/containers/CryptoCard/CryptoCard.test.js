import React from 'react';
import ReactDOM from 'react-dom';
import CryptoCard from './CryptoCard';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<CryptoCard />, section);
});
