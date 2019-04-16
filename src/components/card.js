import { h } from 'hyperapp'

export default props =>
  <article onclick={() => props.select(props.hero)}>
    <div className='card'>
      <h3>{props.hero.name}</h3>
      <p>#{props.hero.id}</p>
      <img src={props.hero.image.url} alt={props.hero.name} className='image'/>
    </div>
    <button onclick={() => props.decking(props.hero)}> {props.deckingLabel} </button>
  </article>
