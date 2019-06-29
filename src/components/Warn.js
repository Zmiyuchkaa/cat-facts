import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  nav_list: {
    width: 300
  },
  warning_window: {
    margin: '0 auto',
    marginBottom: 30,
    width: 500,
    height: 550,
  },
  home_link: {
    color: 'white',
  },
  title: {
    color: '#f56265',
    textTransform: 'uppercase',
    marginTop: 0,
    fontWeight: 100
  }
})

const NotFound = () => {
  const classes = useStyles();

  return(
<div className = {classes.warning_window}>
<h2 className = {classes.title}>Nothing to do here. <Link to = '/' className = {classes.home_link}><span className = {classes.go_home}>Go to home page</span></Link></h2>
</div>
  )
}

export default NotFound;