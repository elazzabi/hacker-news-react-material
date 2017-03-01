import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import Navbar from './Navbar'
import ItemsList from './ItemsList'

const url = 'https://hacker-news.firebaseio.com/v0/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsToDisplay: [],
      allItems: [],
      page: 0
    }
  }

  loadMoreData() {
    let component = this
    let page = this.state.page
    let maxItems = this.state.allItems.slice(10 * page, 9 + 10 * page)

    axios.all(maxItems.map(item => axios.get(url + '/item/' + item + '.json'))).then(axios.spread(function(...args) {
      component.setState({
        itemsToDisplay: component.state.itemsToDisplay.concat(args.map(x => x.data)), 
        page: component.state.page + 1})
    }))

  }

  componentDidMount() {
    let component = this
    axios.get(url + "topstories.json").then(response => {
      component.state.allItems = response.data
      component.loadMoreData()
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <ItemsList items={this.state.itemsToDisplay} loadMoreData={this.loadMoreData.bind(this)}/> 
        </div> 
      </MuiThemeProvider>
    )
  }
}

export default App
