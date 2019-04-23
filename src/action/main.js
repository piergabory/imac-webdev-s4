import api from '../api/apiGateway'

export default {

  nextStep: () => state => ({...state, step: (state.step + 1) % 3}),

  checkStepCompletion: () => state => {
    const isStepComplete =
    // search needs to have a full deck
    (state.step === 0 && state.deck.cards.length === state.deck.maxSize) ||

    // round continues up to the last standing
    (state.step === 1 && state.deck.cards.length === 1) ||

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
    const getRandomIndex = Math.round(Math.random() * state.deck.cards.length)
    const createTeam = [].fill(0, state.round.teamSize).map(state.deck.cards[getRandomIndex()])

    return {
      ...state,
      round: {
        ...state.round,
        leftTeam: createTeam(),
        rightTeam: createTeam()
      }
    }
  },

  fightTeams: (left, right) => (state, actions) => {
    const compareTeams = (left, right) => right
    compareTeams(left, right).map(survivor => actions.deck.add(survivor))
    return { ...state, round: { ...state.round, leftTeam: [], rightTeam: [] } }
  }
}
