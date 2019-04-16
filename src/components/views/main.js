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
      { deck({...state.cards, actions: actions.cards}) }
    </div>
    <input oninput={ev => actions.search(ev.target.value)} type='text'/>
    <div className='autocomplete cards'>
      { state.autocomplete.length === 0 && 'Search a hero.'}
      { state.autocomplete.map(hero => card({hero, ...actions.cards, selected: hero.id === state.cards.selected, inDeck: false})) }
    </div>
  </main>
