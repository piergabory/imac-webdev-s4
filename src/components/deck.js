import { h } from 'hyperapp'
import card from './card'

export default props =>
  <section className='deck'>
    <h2>Deck (<span className='cardCount'>{props.deck.length}/{props.deckMaxSize}</span>)</h2>
    <div className='cards'>
      {props.deck.map(hero => card({
        hero,
        ...props.commonCardProps,
        selected: props.selected === hero.id,
        inDeck: true
      }))}
    </div>
  </section>
