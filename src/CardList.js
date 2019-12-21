import React from 'react';
import { Grid, withStyles, Select, MenuItem   } from '@material-ui/core';

import Card from './CardComponent';

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 15,
  },
});

class CardList extends React.Component {
  render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.paper}>
        <Grid container spacing={2} alignItems="stretch" direction="row">
            {data.length <= 0 ? 'No Data Found' : ''}
            <Grid item xs={12} sm={10}>
              <Select
                value={this.props.sortBy}
                onChange={(e) => this.props.sortData(e.target.value)}
              >
                <MenuItem value="asc">asc</MenuItem >
                <MenuItem value="dsc">dsc</MenuItem >
              </Select>
            </Grid>
            {data.map(d => <Grid item xs={6} sm={3} key={d.id}><Card data={d} /></Grid>)}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CardList);