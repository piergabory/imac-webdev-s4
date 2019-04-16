import { h } from 'hyperapp'

export default props =>
  <article className='card'>
    <h3>{props.hero.name}</h3>
    <p>#{props.hero.id}</p>
    <img src={props.hero.image.url} alt={props.hero.name} className='image'/>
    <button onclick={() => props.addToDeck(props.hero)}>Add to Deck</button>
  </article>
