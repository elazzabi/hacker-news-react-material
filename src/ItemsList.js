import React, { Component } from 'react'
import axios from 'axios'

import Item from './Item'

const url = 'https://hacker-news.firebaseio.com/v0/'

class ItemsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get(url + "topstories.json").then(response => this.setState({items: response.data.slice(0, 9)}))
  }

  render() {
    return (
      <div id="items">
        {this.state.items.map(x => <Item/>)}
      </div>
    );
  }
}

export default ItemsList