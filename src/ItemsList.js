import React, { Component } from 'react'
import axios from 'axios'

import Item from './Item'
import Loading from './Loading'

const url = 'https://hacker-news.firebaseio.com/v0/'

class ItemsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    let component = this;
    axios.get(url + "topstories.json").then(response => {
      let maxItems = response.data.slice(0, 9)
      axios.all(maxItems.map(item => axios.get(url + '/item/' + item + '.json'))).then(axios.spread(function(...args) {
        component.setState({items: args.map(x => x.data)})
      }))
    })
  }

  render() {
    return (
      <div id="items">
        {this.state.items.length !== 0 ? this.state.items.map(x => <Item data={x} key={x.id}/>) : <Loading />}
      </div>
    );
  }
}

export default ItemsList