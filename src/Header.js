import React from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

const styles = () => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  fixed: {
    position: 'fixed',
    top: 0
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <AppBar className={classes.fixed} color="secondary">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Rick & Morty Show
                </Typography>
            </Toolbar>
        </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
