import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const LoadingIcon = () => (
  <div>
    <CircularProgress size={50} thickness={5} style={{ marginTop: 100 }}/>
  </div>
);

export default LoadingIcon;