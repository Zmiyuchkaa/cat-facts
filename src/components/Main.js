import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Main = () => {
  return(
    <main>
      <div>
        <h3 className='main-text'>Follow the instruction below</h3>
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span" size='large' component={Link} to={'/catfacts/'}>CLICK ME</Button>
        </label>
      </div>
    </main>
  )
}

export default Main;
