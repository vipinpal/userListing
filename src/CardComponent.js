import React from 'react';
import { withStyles, Card, CardMedia, CardContent, Grid } from '@material-ui/core';

const styles = (theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardcontentKey: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    textTransform: 'uppercase',
    textAlign: 'initial',
    fontSize: 12
  },
  cardcontentValue: {
    justifyContent: 'flex-end',
    display: 'flex',
    textAlign: 'end',
    fontSize: 12
  },
  overlay: {
    position: 'absolute',
    color: 'white',
    backgroundColor: 'black',
    opacity: 0.6,
    marginTop: -37,
    marginLeft: -15,
 }
//  position: absolute;
//     bottom: 90px;
//     left: 16px;
//     background-color: red;
//     opacity: 0.5;
});

class CardLayout extends React.Component {
    constructor() {
        super();
        this.state = {
            detailField: ['status', 'species', 'gender', 'origin', 'location'],
        };
    }
    getData = (key) => {
        const { classes, data }  = this.props;
        let value = '';
        if(key === 'origin' || key === 'location') {
            value = data[key]['name'];
            key = key === 'location' ? 'last location' : key;
        } else {
            value = data[key];
        }
        return (
            <Grid container spacing={2} key={key}>
                <Grid item xs={4} className={classes.cardcontentKey}>{key}</Grid>
                <Grid item xs={8} className={classes.cardcontentValue}>{value}</Grid>
            </Grid>
        )
    }
    render() {
        const { classes, data }  = this.props;
        const { detailField } = this.state;
        return (
            <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={data.image}
                title={data.name}
            />
            <CardContent>
                <div className={classes.overlay}>
                    {data.name}
                </div>
                {detailField.map(d => this.getData(d))}
            </CardContent>

            </Card>
        );
    }
}

export default withStyles(styles)(CardLayout);