import api from '../api/apiGateway'
import { defineEnvironment, fight } from './combat'

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
      actions.remove(hero)
      return {...state, cards: state.cards.concat([hero])}
    }
  },

  gatherTeamsFromDeck: () => state => {
    // guards. Cant overwrite teams (normally this is prevented by button disabled)
    if (state.round.isLastRound) return {state}
    if (state.round.leftTeam.length > 0) return {state}
    if (state.round.rightTeam.length > 0) return {state}

    // generate an index between 0 and upTo
    const getRandomIndex = (upTo) => Math.floor(Math.random() * upTo)

    // grabs random heroes from a collections
    const createTeam = (fromDeck) => {
      const teamSize = Math.min(state.round.teamSize, fromDeck.length)
      return Array(teamSize).fill(getRandomIndex).map(index => fromDeck[index(fromDeck.length)])
    }

    // define combat environment
    const environment = defineEnvironment()
    const deck = state.deck.cards
    const leftTeam = createTeam(deck)
    const reducedDeck = deck.filter(hero => !leftTeam.includes(hero))
    const rightTeam = createTeam(reducedDeck)
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
