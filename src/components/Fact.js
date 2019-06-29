import React from 'react';
import axios from 'axios';

const CatFact = ({match}) => {
  const [catFact, setCatFact] = React.useState(null);

React.useEffect(() => {
  axios.get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts/${match.params.id}`)
  .then(response => {
    console.log(match.params.id)
    console.log(response);
    setCatFact(response.data.text);
  });
}, [match.params.id]);

  return(
    <div><p>{catFact}</p></div>
  ) 
}


export default CatFact;
