/**
 * @file components/view/main.js
 * @brief Main view.
 */

/// @brief import hyperapp
// generates the html code from the jsx. Needs to be inside any view or component file.

import { h } from 'hyperapp'
import card from '../card'

export default (state, actions) =>
  <main onclick={ () => actions.getHero(70) }>
    {state.hero ? card(state.hero) : 'Hello world!'}
  </main>
