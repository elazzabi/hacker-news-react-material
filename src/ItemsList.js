import React, { Component } from 'react'

import Item from './Item'
import Loading from './Loading'

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
  listenToScroll() {
    let component = this
    if (document.body.scrollHeight === document.body.scrollTop + window.innerHeight) {
        component.props.loadMoreData()
    }
  }

  render() {
    let items = this.props.items
    return (
      <HandleScroll listenToScroll={this.listenToScroll.bind(this)}>
        <div id="items">
          {items.length !== 0 ? items.map(x => <Item data={x} key={x.id}/>) : <Loading />}
        </div>
      </HandleScroll>
    )
  }
}

export default ItemsList