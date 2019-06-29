import React from 'react';
import axios from 'axios';

const CatFact = ({match}) => {
  const setCatFact = React.useState({});


React.useEffect(() => {
  axios.get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts/${match.params.id}`)
  .then(response => {
    setCatFact(response.data);
  });
}, [match.params.id]);

  return(
    <div><p>Hello world</p></div>
  ) 
}


export default CatFact;
