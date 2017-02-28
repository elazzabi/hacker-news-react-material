import React, { Component } from 'react'
import axios from 'axios'

import Item from './Item'
import Loading from './Loading'

const url = 'https://hacker-news.firebaseio.com/v0/'

class HandleScroll extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.props.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.listenToScroll)
  }

  render() {
    return this.props.children
  }
}

class ItemsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      allItems: [],
      page: 0
    }
  }

  loadData(page) {
    let component = this;
    let maxItems = this.state.allItems.slice(10 * page, 9 + 10 * page)
    axios.all(maxItems.map(item => axios.get(url + '/item/' + item + '.json'))).then(axios.spread(function(...args) {
      component.setState({items: component.state.items.concat(args.map(x => x.data)), page: component.state.page + 1})
    }))

  }
 
  listenToScroll() {
    let component = this
    if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
        component.loadData(component.state.page)
    }
  }

  componentDidMount() {
    let component = this;

    axios.get(url + "topstories.json").then(response => {
      this.setState({
        allItems: response.data
      })

      component.loadData(0)
    })
  }


  render() {
    return (
      <HandleScroll listenToScroll={this.listenToScroll.bind(this)}>
        <div id="items">
          {this.state.items.length !== 0 ? this.state.items.map(x => <Item data={x} key={x.id}/>) : <Loading />}
        </div>
      </HandleScroll>
    );
  }
}

export default ItemsList