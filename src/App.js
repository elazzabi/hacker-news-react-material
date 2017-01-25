import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

import Item from './Item'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <div id="items">
            {
              Array(10).fill(0).map(x => {
                return <Item/>
              })
            }
          </div>
        </div>  
      </MuiThemeProvider>
    );
  }
}

export default App;
