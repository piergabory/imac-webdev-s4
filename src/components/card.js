import { h } from 'hyperapp'

export default props => <article>
  {console.log(props)}
  <h3>{props.name}</h3>
  <p>#{props.id}</p>
  <img src={props.image.url} alt={props.name}/>
</article>
