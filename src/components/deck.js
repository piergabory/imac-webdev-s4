import { h } from 'hyperapp'
import Card from './card'

export default ({state, actions}) =>
  <section className='deck'>
    <h2>Deck (<span className='cardCount'>{state.cards.length}/{state.maxSize}</span>)</h2>
    <div className='cards'>
      {state.cards.map(hero => <Card hero={hero} decking={actions.remove} deckingLabel='Remove from deck'/>)}
    </div>
  </section>
