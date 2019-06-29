import React from 'react';
import axios from 'axios';

const CatFact = ({match}) => {
  const setCatFact = React.useState({});
  let text = console.log('fuck')
  text()

React.useEffect(() => {
  axios.get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts/${match.params.id}`)
  .then(response => {
    console.log(match.params.id)
    setCatFact(response.data);
    text()
  });
}, [match.params.id]);

  return(
    <div><p>Hello world</p></div>
  ) 
}


export default CatFact;
