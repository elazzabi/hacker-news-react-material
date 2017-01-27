import React, { Component } from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

class Item extends Component {
  render() {
    let {by, title, score} = this.props.data

    return <Card style={{marginTop: "16px"}}>
      <CardHeader
        avatar={<Avatar>{title[0]}</Avatar>}
        title={title}
        subtitle={`by ${by} | ${score} points`}
        actAsExpander={true}
        style={{display: "flex", alignItems:"center"}}
      />
    </Card>
  }
}

export default Item;