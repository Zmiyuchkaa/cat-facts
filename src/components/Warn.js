import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  text: {
    margin: '2em',
    fontSize: '25px',
  },
})

const NotFound = () => {
  const classes = useStyles();
  return(
    <div>
      <Grid container justify="center">
        <Grid item>
          <ClickAwayListener>
            <div>
              <Typography className={classes.text}>Ooops, something went wrong</Typography>
              <Tooltip PopperProps={{disablePortal: true,}} disableFocusListener disableHoverListener disableTouchListener title="Add">
                <Button color="secondary" size='large' component={Link} to={'/catfacts/'}>BACK TO FACTS</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
}

export default NotFound;