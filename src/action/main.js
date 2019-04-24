import api from '../api/apiGateway'
import { defineEnvironment, fight, createTeam } from './combat'

export default {

  nextStep: () => state => ({
    ...state,
    step: (state.step + 1) % 3,

    // reset on step change
    round: {
      ...state.round,
      isLastRound: false,
      leftTeam: [],
      rightTeam: []
    }
  }),

  checkStepCompletion: () => state => {
    const isStepComplete =
    // search needs to have a full deck
    (state.step === 0 && state.deck.cards.length === state.deck.maxSize) ||

    // round continues up to the last standing
    (state.step === 1 && state.deck.cards.length <= state.round.teamSize && state.round.leftTeam.length === 0 && state.round.rightTeam.length === 0) ||

    // victory screen has no requirements
    (state.step >= 2)

    return {...state, isStepComplete}
  },

  search: {
    search: searchedExpression => (_, actions) => {
      api.searchHero(searchedExpression).then(response => actions.updateMatches(response.results))
    },
    updateMatches: matches => state => ({...state, matches}),
    preview: card => state => ({...state, preview: card}),
    closePreview: () => state => ({...state, preview: null})
  },

  deck: {
    remove: hero => state => ({...state, cards: state.cards.filter(card => card.id !== hero.id)}),

    // adds with no doubles
    add: hero => (state, actions) => {
      if (state.cards.length >= state.maxSize) return state
      const newState = actions.remove(hero)
      return {...newState, cards: newState.cards.concat([hero])}
    }
  },

  gatherTeamsFromDeck: () => state => {
    // guards. Cant overwrite teams (normally this is prevented by button disabled)
    if (state.round.isLastRound) return {state}
    if (state.round.leftTeam.length > 0) return {state}
    if (state.round.rightTeam.length > 0) return {state}

    const environment = defineEnvironment()
    const deck = state.deck.cards
    const leftTeam = createTeam(state.round.teamSize, deck)
    const reducedDeck = deck.filter(hero => !leftTeam.includes(hero))
    const rightTeam = createTeam(state.round.teamSize, reducedDeck)
    const veryReducedDeck = reducedDeck.filter(hero => !rightTeam.includes(hero))

    return {
      ...state,
      round: { ...state.round, leftTeam, rightTeam, environment },
      deck: {...state.deck, cards: veryReducedDeck}
    }
  },

  fightTeams: () => state => {
    const survivors = fight(state.round.leftTeam, state.round.rightTeam, state.round.environment)
    const deck = state.deck.cards.concat(survivors)
    const isLastRound = deck.length <= state.round.teamSize

    return {
      ...state,
      round: { ...state.round, leftTeam: [], rightTeam: [], isLastRound },
      deck: { ...state.deck, cards: deck }
    }
  }
}
