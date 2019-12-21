import React, { Fragment } from 'react';
import { Grid, withStyles, Select, MenuItem, FormControl, InputLabel, Chip } from '@material-ui/core';

import Card from './CardComponent';

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 15,
  },
  alien: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'flex',
  },
  chips: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex',
  },
  space: {
    marginRight: 3,
  }
});

class CardList extends React.Component {
  render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.paper}>
        <Grid container spacing={2} alignItems="stretch" direction="row">
            {data.length <= 0 ? 'No Data Found' : ''}
            {this.props.filter && this.props.filter.length > 0 &&
              <Fragment>
                Select Filter
                <Grid item xs={12} sm={12} className={classes.chips}>
                  {this.props.filter.map(d => <Chip className={classes.space} size="small" label={d} color="secondary" />)}
                </Grid>
              </Fragment>
            }
            <Grid item xs={12} sm={12} className={classes.alien}>
            <FormControl className={classes.formControl}>
              <InputLabel id="sort">Sort by ID</InputLabel>
                <Select
                  labelId="sort"
                  value={this.props.sortBy}
                  onChange={(e) => this.props.sortData(e.target.value)}
                >
                  <MenuItem value="asc">Ascending</MenuItem >
                  <MenuItem value="dsc">Descending</MenuItem >
                </Select>
              </FormControl>
            </Grid>
            {data.map(d => <Grid item xs={6} sm={3} key={d.id}><Card data={d} /></Grid>)}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CardList);
