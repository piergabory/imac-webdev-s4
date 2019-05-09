import api from '../api/apiGateway'
import { defineEnvironment, fight, createTeam } from './combat'

export default {

  nextStep: () => state => {
    const step = (state.step + 1) % 3

    const isDeckFull = state.deck.cards.length >= state.deck.maxSize

    const defaultState = {
      ...state,
      step,

      search: {
        matches: [],
        notFound: false
      },

      deck: {...state.deck, isDeckFull},

      // reset on step change
      round: {
        ...state.round,
        isLastRound: false,
        leftTeam: [],
        rightTeam: [],
        survivors: undefined
      }
    }

    switch (step) {
      case 0: return { ...defaultState, history: [] }
      case 1: return { ...defaultState, history: [state.deck.cards] }
      case 2: return { ...defaultState, history: state.history.concat([state.deck.cards]) }
    }
  },

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
    search: searchedExpression => (state, actions) => {
      state.query && clearTimeout(state.query)
      const query = setTimeout(() => api.searchHero(searchedExpression).then(response => actions.updateMatches(response.results)), 300)
      return {...state, query}
    },
    updateMatches: matches => state => {
      const notFound = matches.length === 0
      return {...state, matches, notFound}
    },
    preview: card => state => ({...state, preview: card}),
    closePreview: () => state => ({...state, preview: null})
  },

  deck: {
    remove: hero => state => {
      const cards = state.cards.filter(card => card.id !== hero.id)
      const isDeckFull = state.cards.length >= state.maxSize
      return {...state, cards, isDeckFull}
    },

    // adds with no doubles
    add: hero => (state, actions) => {
      if (state.isDeckFull) return state
      const newState = actions.remove(hero)
      const cards = newState.cards.concat([hero])
      const isDeckFull = cards.length >= state.maxSize
      return {...newState, cards, isDeckFull}
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
      round: { ...state.round, leftTeam, rightTeam, environment, survivors: undefined },
      deck: {...state.deck, cards: veryReducedDeck}
    }
  },

  fightTeams: () => state => {
    const survivors = fight(state.round.leftTeam, state.round.rightTeam, state.round.environment)
    const deck = state.deck.cards.concat(survivors)
    const isLastRound = deck.length <= state.round.teamSize
    return {
      ...state,
      round: { ...state.round, leftTeam: [], rightTeam: [], isLastRound, survivors },
      deck: { ...state.deck, cards: deck },
      history: state.history.concat([deck])
    }
  }

}
