/**
 * @file components/view/main.js
 * @brief Main view.
 */

/// @brief import hyperapp
// generates the html code from the jsx. Needs to be inside any view or component file.

import { h } from 'hyperapp'
import Deck from '../deck'

import SearchScreen from '../screens/search.screen'
import RoundScreen from '../screens/round.screen'
import FinalResultScreen from '../screens/finalResult.screen'

export default (state, actions) =>
  <main>
    <h1>Hyperbrawl battle royale</h1>
    { state.step === 0 && <SearchScreen
      state={state.search}
      ignore={state.deck.cards}
      onSelection={actions.deck.add}
      actions={actions.search}
      isDeckFull={state.deck.isDeckFull}
    /> }

    { state.step === 1 && <RoundScreen
      state={state.round}
      gatherTeamFromDeckAction={actions.gatherTeamsFromDeck}
      fightRoundAction={actions.fightTeams}
    /> }
    { state.step === 2 && <FinalResultScreen history={state.history} /> }
    <Deck state={state.deck} actions={actions.deck} onupdate={actions.checkStepCompletion} isEditable={state.step === 0}/>
    <button className='navbutton mainAction' disabled={!state.isStepComplete} onclick={() => actions.nextStep()}>NEXT</button>
  </main>
