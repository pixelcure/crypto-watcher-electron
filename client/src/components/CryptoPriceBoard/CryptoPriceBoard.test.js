import React from 'react';
import ReactDOM from 'react-dom';
import CryptoPriceBoard from './CryptoPriceBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CryptoPriceBoard />, div);
});
