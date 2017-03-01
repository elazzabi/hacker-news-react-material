import React, { Component } from 'react'
import {Card, CardHeader, CardActions} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Link from 'material-ui/svg-icons/action/open-in-new'
import Comment from 'material-ui/svg-icons/communication/comment'

class Item extends Component {
  render() {
    let {by, title, score, url, kids, type} = this.props.data

    return <Card style={{marginTop: "16px"}}>
      <CardHeader
        title={title}
        subtitle={`by ${by} | ${score} points`}
        actAsExpander={true}
        showExpandableButton={true}
        style={{display: "flex", alignItems:"center"}}
      />
      <CardActions expandable={true} style={{float: "right", display: "flex", alignItems: "center"}}>
        {type === "story" ?
          <IconButton tooltip={kids ? kids.length + (kids.length <= 1 ? ' comment' : ' comments') : 0}>
            <Comment />
          </IconButton> : ""}
        <IconButton href={url} tooltip="Open link">
          <Link />
        </IconButton>
      </CardActions>
    </Card>
  }
}

export default Item