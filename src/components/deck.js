import { h } from 'hyperapp'

export default props =>
  <ul>
    {props.heroes.map(hero => <li>{hero.name}</li>)}
  </ul>
