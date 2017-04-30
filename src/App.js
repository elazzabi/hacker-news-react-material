import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import Navbar from './Navbar'
import ItemsList from './ItemsList'

const url = "https://hacker-news-express-hhhkjgpiwi.now.sh/page/"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      page: 1
    }
  }

  loadPage() {
    let component = this

    axios.get(url + this.state.page).then(res => {
      component.setState({
        items: this.state.items.concat(res.data),
        page: this.state.page + 1
      })
    })

  }

  componentDidMount() {
    this.loadPage()
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <ItemsList items={this.state.items} loadMoreData={this.loadPage.bind(this)}/> 
        </div> 
      </MuiThemeProvider>
    )
  }
}

export default App
