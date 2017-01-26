import React from 'react';
import ReactDOM from 'react-dom';
import ItemsList from './ItemsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemsList />, div);
});
