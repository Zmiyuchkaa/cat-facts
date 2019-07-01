import React from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
  nav: {
    marginTop: '30px',
    color: '#314f1a',
    fontWeight: 'bold',
    fontSize: '20px',
    paddingRight: '30px',
  },
  facts: {
    margin: '24px',
    minHeight: 'calc(96vh - 341px)',
    boxSizing: 'border-box',
    padding: '8px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: ''
},
  card: {
    maxWidth: 345,
    backgroundColor: '#f0c09e',
    '&:hover': {
      opacity: '0.8',
    }
  },
  text: {
    marginBottom: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const FactsList = () => {
  const classes = useStyles();
  const [catFacts, setCatFacts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts`)
      .then(response => {
        setCatFacts(response.data.all);
        console.log(response.data.all);
      });
  }, []);

  return (
    <div>
      <Grid item>
          <Tooltip placement="top-start">
            <Button className={classes.nav} component={Link} to={'/'}>Main</Button>
          </Tooltip>
          <Tooltip placement="top">
            <Button className={classes.nav} component={Link} to={'/404/'}>404</Button>
          </Tooltip>
        </Grid>
      <div className={classes.facts}>{catFacts.slice(0, 21).map(catFact =>
        <div className='facts-block__card'>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.text}>{catFact.text}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">Liked by <b>{catFact.upvotes}</b> cat lovers</Typography>
            </CardContent>
            <Button size="small" component={Link} to={`/fact/${catFact._id}/`}>Learn More</Button>
          </Card>
        </div>
      )}
      </div>
    </div>
  );   
}

export default FactsList;
