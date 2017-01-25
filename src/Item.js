import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

const Item = () => (
  <Card style={{marginTop: "16px"}}>
    <CardHeader
      avatar={<Avatar>A</Avatar>}
      title="Article title"
      subtitle="Some info goes here"
      actAsExpander={true}
      style={{display: "flex", alignItems:"center"}}
    />
  </Card>
);

export default Item;