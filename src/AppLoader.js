import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
  },
}));

function AppLoader() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>Loading....</div>
  );
}

export default AppLoader;
