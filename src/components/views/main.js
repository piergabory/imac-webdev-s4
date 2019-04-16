/**
 * @file components/view/main.js
 * @brief Main view.
 */

/// @brief import hyperapp
// generates the html code from the jsx. Needs to be inside any view or component file.

import { h } from 'hyperapp'
import card from '../card'

export default (state, actions) =>
  <main>
    <h1>Hyperbrawl battle royale</h1>
    <input oninput={ev => actions.search(ev.target.value)} type='text'/>
    <div className='autocomplete'>
      {console.log(state)}
      { state.autocomplete.map(hero => card(hero))}
    </div>
  </main>
