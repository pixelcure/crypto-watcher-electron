import React from 'react';
import ReactDOM from 'react-dom';
import PriceBoardDashboard from './PriceBoardDashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PriceBoardDashboard />, div);
});
