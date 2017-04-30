import React, { Component } from 'react'

import Item from './Item'
import Loading from './Loading'

class ItemsList extends Component { 
  render() {
    let items = this.props.items
    return (
      <div id="items">
        {items.length !== 0 ? items.map(x => <Item data={x} key={x.id}/>) : <Loading />}
      </div>
    )
  }
}

export default ItemsList