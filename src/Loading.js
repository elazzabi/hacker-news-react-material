import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
    marginTop: '16px',
    alignSelf: 'center'
  },
};

const Loading = () => (
  <RefreshIndicator
    size={40}
    left={10}
    top={0}
    status="loading"
    style={style.refresh}
  />
);

export default Loading;