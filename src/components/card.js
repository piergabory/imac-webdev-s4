import { h } from 'hyperapp'

export default props =>
  <article className='card' onclick={() => props.select(props.hero)}>
    <h3>{props.hero.name}</h3>
    <p>#{props.hero.id}</p>
    <img src={props.hero.image.url} alt={props.hero.name} className='image'/>
    { props.selected && !props.inDeck && <button onclick={() => props.addToDeck(props.hero)}>Add to Deck</button> }
    { props.selected && props.inDeck && <button onclick={() => props.removeFormDeck(props.hero)}>Remove from Deck</button> }
  </article>
