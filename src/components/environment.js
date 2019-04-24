import { h } from 'hyperapp'

export default ({environment}) =>
  <div className='environnement'>
    <h2>Shall fight in the {environment.name}</h2>
    the {environment.name} stats balance are...
    { Object.entries(environment.statisticsWeights).map(keyValuePair => (
      <span> ({keyValuePair[0]}: {keyValuePair[1]}) </span>
    )) }
  </div>
