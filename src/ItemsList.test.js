import React from 'react';
import ReactDOM from 'react-dom';
import ItemsList from './ItemsList';
import { shallow } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><ItemsList items={[]}/></MuiThemeProvider>, div);
});
