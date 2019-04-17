import api from '../api/apiGateway'

export default {

  nextStep: () => state => ({...state, step: (state.step + 1) % 3}),

  search: {
    search: searchedExpression => (_, actions) => {
      api.searchHero(searchedExpression).then(response => actions.updateMatches(response.results))
    },
    updateMatches: matches => state => ({...state, matches})
  },

  deck: {
    remove: hero => state => ({...state, cards: state.cards.filter(card => card.id !== hero.id)}),

    // adds with no doubles
    add: hero => (state, actions) => {
      if (state.cards.length >= state.maxSize) return state
      actions.remove(hero)
      return {...state, cards: state.cards.concat([hero])}
    }
  }
}
