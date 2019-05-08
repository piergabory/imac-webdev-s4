import { h } from 'hyperapp'
import Card from './card'
import CardStack from './cardStack'

export default ({state, actions, onupdate, isEditable}) =>
  <section className='deckwrapper'>
    <h2>Deck (<span className='cardCount'>{state.cards.length}/{state.maxSize}</span>)</h2>
    <div className='deckcards' onupdate={onupdate}>
      <CardStack cards={state.cards.map(hero => <Card hero={hero} discard={isEditable && actions.remove} discardLabel={isEditable && 'REMOVE'}/>)}/>
    </div>
  </section>
