import React from 'react';
import ReactDOM from 'react-dom';
import CostFetching from './CostFetching';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CostFetchingHOC />, div);
});
