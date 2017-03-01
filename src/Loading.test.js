import React from 'react'
import ReactDOM from 'react-dom'
import Loading from './Loading'
import { shallow } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MuiThemeProvider><Loading /></MuiThemeProvider>, div)
})
