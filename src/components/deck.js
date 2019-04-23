import { h } from 'hyperapp'
import Card from './card'

export default ({state, actions, onupdate}) =>
  <section className='deck'>
    <h2>Deck (<span className='cardCount'>{state.cards.length}/{state.maxSize}</span>)</h2>
    <div className='cards' onupdate={onupdate}>
      {state.cards.map(hero => <Card hero={hero} discard={actions.remove} discardLabel='Remove from deck'/>)}
    </div>
  </section>
