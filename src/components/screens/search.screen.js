import { h } from 'hyperapp'
import Card from '../card'

export default ({state, actions, ignore, onSelection}) => {
  const ingnoredIds = ignore.map(hero => hero.id)
  const visibleMatches = state.matches.filter((match) => !ingnoredIds.includes(match.id)).filter((_, index) => index < 6)
  const matchedCard = (match, onclick) => <Card hero={match} decking={onSelection} onclick={onclick} deckingLabel='ADD'/>

  return <div className='searchwrapper'>
    <nav className='searchBox'>
      <input className='searchField' oninput={ ev => actions.search(ev.target.value) } type='text' placeholder='Luke Skywalker'/>
    </nav>
    {
      (state.preview)
        ? <section className='preview'>
          { <Card hero={state.preview} decking={onSelection} deckingLabel='ADD' discard={actions.closePreview} discardLabel='RETURN' />}
        </section>
        : <section className='results'>
          {
            visibleMatches.length === 0
              ? <div className='info'>Search a hero to start</div>
              : <div className='searchcards'>{visibleMatches.map(match => matchedCard(match, () => actions.preview(match)))}</div>
          }
        </section>
    }
  </div>
}
