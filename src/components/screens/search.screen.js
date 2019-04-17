import { h } from 'hyperapp'
import Card from '../card'

export default ({state, actions, ignore, onSelection}) => {
  const ingnoredIds = ignore.map(hero => hero.id)
  const visibleMatches = state.matches.filter(match => !ingnoredIds.includes(match.id))
  const matchedCard = match => <Card hero={match} decking={onSelection} deckingLabel='Add to the Deck'/>

  return <div className='wrapper'>
    <nav className='searchBox'>
      <input oninput={ ev => actions.search(ev.target.value) } type='text' placeholder='Luke Skywalker'/>
    </nav>
    <section className='results cards'>
      {visibleMatches.map(match => matchedCard(match))}
    </section>
  </div>
}
