import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';



export default class FactsList extends React.Component {
  // initialize state inside constructor
  constructor() {
    super();
    this.state = {facts: []}
  }

componentDidMount() {
  axios.get('https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts')
  .then(response => {
    console.log(response.data);
    this.setState({facts: response.data.all});
  });
}
render() {
  return (
    <div className='facts-block'>
      {this.state.facts.slice(0,12).map(fact => 
      <div className='facts-block__card'>
      <h3>{fact.text}</h3>
      <h4><img src='../images/positive-vote.png'></img>{fact.upvotes}</h4>
      <Button size="small" color="primary" component={Link} to={`/fact/${fact._id}/`}>
                  Learn More
                </Button>
      </div>)}
    </div>
  )
}
}
