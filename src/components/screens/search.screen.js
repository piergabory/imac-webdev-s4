import { h } from 'hyperapp'
import Card from '../card'

export default ({state, actions, ignore, onSelection, isDeckFull}) => {
  const ingnoredIds = ignore.map(hero => hero.id)
  const visibleMatches = state.matches.filter((match) => !ingnoredIds.includes(match.id)).filter((_, index) => index < state.maxResults)
  const matchedCard = (match, onclick) => <Card hero={match} decking={onSelection} onclick={onclick} deckingLabel='ADD' deckable={!isDeckFull}/>

  return <div className='searchwrapper'>
    <nav className='searchBox'>
      <input className='searchField' oninput={ ev => actions.search(ev.target.value) } type='text' placeholder='Luke Skywalker'/>
    </nav>
    {
      (state.preview) && <section className='preview'>
        { <Card hero={state.preview} decking={param => { onSelection(param); actions.closePreview(param) }} deckingLabel='ADD' discard={actions.closePreview} discardLabel='RETURN' deckable={!isDeckFull}/>}
      </section>
    }

    {
      !state.preview && <section className='results'>
        { visibleMatches.length === 0 && !state.notFound && <div className='info'>Search a hero to start</div> }
        { state.notFound && <div className='info'>Sorry, we don't have your hero. Try another one.</div> }
        <div className='searchcards'>{visibleMatches.map(match => matchedCard(match, () => actions.preview(match)))}</div>
      </section>
    }
  </div>
}
