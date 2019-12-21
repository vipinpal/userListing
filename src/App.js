import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

import Header from './Header';
import CardList from './CardList';
import AppLoader from './AppLoader';
import Filter from './Filter';
import { getData } from './dataSource/dataSourceHelper';
import { getFilterData } from './helper/helperUtil';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
        data: [],
        storedData: [],
        info: {},
        filterKeys: ['species', 'gender', 'origin'],
        filterData: {},
        showLoader: true,
        sortBy: 'asc',
        url: 'https://rickandmortyapi.com/api/character/',
    };
  }

  componentDidMount() {
    this.getPageData(0);
  }

  getSortData = (data) => {
    const { sortBy } = this.state;
    if (sortBy === 'asc') {
      return data.sort((n, p) => n.id - p.id);
    } else if(sortBy === 'dsc') {
      return data.sort((n, p) => p.id - n.id);
    } else return data;
  }

  getPageData = (page) => {
    getData(this.state.url).then(res => {
      if (res.results) {
        const filters = getFilterData(this.state.filterKeys, res.results);
        this.setState({ data: this.getSortData(res.results), storedData: res.results,  filterData: filters, showLoader: false });
      }
      if (res.info) {
        this.setState({ info: res.info });
      }
    })
    .catch(error => {
      console.log('error');
    })
  }

  updateFilter = (filters) => {
    const { filterKeys } = this.state;
    let newData = this.state.storedData.filter(od => {
      if (filterKeys[0] in filters && filters[filterKeys[0]].indexOf(od[filterKeys[0]]) >= 0) {
        return true;
      } else if (filterKeys[1] in filters && filters[filterKeys[1]].indexOf(od[filterKeys[1]]) >= 0) {
        return true;
      } else if (filterKeys[2] in filters && filters[filterKeys[2]].indexOf(od[filterKeys[3]]) >= 0) {
        return true;
      } else {
        return false;
      }
    });
    if (newData.length <= 0) {
      newData = [...this.state.storedData];
    }
    this.setState({ data: this.getSortData(newData)});
  }

  sortData = (type) => {
    const { data } = this.state;
    this.setState({ sortBy: type }, () => {
      this.setState({ data: this.getSortData(data)});
    });
  }

  render() {
    const { data, filterData, showLoader } = this.state;
    return (
      <Fragment>
        <Header />
        <Grid container style={{ marginTop: 64 }}>
          <Grid item xs={12} sm={2}><Filter data={filterData} updateFilter={this.updateFilter} /></Grid>
          <Grid item xs={12} sm={10}>
            {
              data.length < 1 && showLoader ?
              <AppLoader />: 
              <CardList data={data} sortBy={this.state.sortBy} sortData={(type) => this.sortData(type)} />
            }
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default App;
