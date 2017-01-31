import React, { Component } from 'react'
import {Card, CardHeader, CardActions} from 'material-ui/Card'
//import Avatar from 'material-ui/Avatar'
//import { pink400 } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import Link from 'material-ui/svg-icons/action/open-in-new'
import Comment from 'material-ui/svg-icons/communication/comment'

class Item extends Component {
  render() {
    let {by, title, score, url, kids} = this.props.data

    return <Card style={{marginTop: "16px"}}>
      <CardHeader
        // Commented due to stretching problems in Avatar
        //avatar={<Avatar backgroundColor={pink400}>{title[0]}</Avatar>}
        title={title}
        subtitle={`by ${by} | ${score} points`}
        actAsExpander={true}
        style={{display: "flex", alignItems:"center"}}
      />
      <CardActions expandable={true} style={{float: "right", display: "flex", alignItems: "center"}}>
        <IconButton tooltip={`${kids.length} comment`}>
          <Comment />
        </IconButton>
        <IconButton href={url} tooltip="Open link">
          <Link />
        </IconButton>
      </CardActions>
    </Card>
  }
}

export default Item