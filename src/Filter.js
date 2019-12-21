import React from 'react';
import { withStyles, Checkbox } from '@material-ui/core';

const style = () => ({
  box: {
      width: '70%',
      border: 'solid 1px',
      marginTop: 44,
      marginLeft: 5,
      padding: 25
  },
});

class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            appliedFilter: {},
        }
    }
    updateFilter = (key, value, checked) => {
        const { appliedFilter } = this.state;
        if (key in appliedFilter) {
            if (checked) {
                appliedFilter[key].push(value);
            } else {
                appliedFilter[key] = appliedFilter[key].filter(k => k !== value);
            }
        } else {
            if (checked) {
                appliedFilter[key] = [value];
            }
        }
        this.setState({ appliedFilter });
        this.props.updateFilter(appliedFilter);
    }
    render() {
        const { classes, data } = this.props;
        return (
            <div>
                <b>Filters</b>
                {Object.keys(data).map(d => {
                    return (
                    <div className={classes.box} key={d}>
                        <div><b>{d}</b></div>
                        { data[d].map((dd) => {
                            return (
                                <div key={dd}>
                                    <Checkbox onClick={(e) => this.updateFilter(d, dd, e.target.checked)} />
                                    {dd}
                                </div>
                            );
                        })}
                    </div>
                    );
                })}
            </div>
        );
    }
}

export default withStyles(style)(Filter);
