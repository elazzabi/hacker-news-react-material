import React, { Component } from 'react'
import {Card, CardHeader, CardActions} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Link from 'material-ui/svg-icons/action/open-in-new'
import Comment from 'material-ui/svg-icons/communication/comment'

class Item extends Component {
  render() {
    let {user, title, score, link, comments, type} = this.props.data

    return <Card style={{marginTop: "16px"}}>
      <CardHeader
        title={title}
        subtitle={`by ${user} | ${score}`}
        actAsExpander={true}
        showExpandableButton={true}
        style={{display: "flex", alignItems:"center"}}
      />
      <CardActions expandable={true} style={{float: "right", display: "flex", alignItems: "center"}}>
        {comments &&
          <IconButton tooltip={comments ? comments : 0}>
            <Comment />
          </IconButton>}
        <IconButton href={link} tooltip="Open link">
          <Link />
        </IconButton>
      </CardActions>
    </Card>
  }
}

export default Item