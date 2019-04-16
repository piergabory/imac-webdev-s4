/**
 * @file components/view/main.js
 * @brief Main view.
 */

/// @brief import hyperapp
// generates the html code from the jsx. Needs to be inside any view or component file.

import { h } from 'hyperapp'
import card from '../card'
import deck from '../deck'

export default (state, actions) =>
  <main>
    <h1>Hyperbrawl battle royale</h1>
    <div>
      { deck({
        ...state.cards,
        commonCardProps: {
          decking: actions.removeFromDeck,
          deckingLabel: 'REMOVE'
        }
      })}
    </div>
    <nav>
      <input oninput={ev => actions.search(ev.target.value)} id='searchField' type='text' placeholder='Luke Skywalker'/>
      <button onclick={() => actions.search(document.getElementById('searchField').value)}>SEARCH</button>
    </nav>
    <div className='autocomplete cards'>
      { state.autocomplete.map(hero => card({
        hero,
        decking: actions.addToDeck,
        deckingLabel: 'ADD',
        selected: hero.id === state.cards.selected
      }))}
    </div>
    <div>
      { state.autocomplete.length === 0 && 'Search a hero.'}
    </div>
  </main>
