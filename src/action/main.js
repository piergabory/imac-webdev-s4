import api from '../api/apiGateway'

export default {
  getHero: id => (_, actions) => {
    api.getHero(id).then(hero => actions.setHero(hero))
  },

  search: searchedExpression => (_, actions) => {
    api.searchHero(searchedExpression).then(response => actions.fillAutocompleteTable(response.results))
  },

  setHero: hero => state => ({...state, hero}),

  fillAutocompleteTable: heroes => state => ({...state, autocomplete: heroes}),

  cards: {
    select: hero => state => ({...state, selected: hero.id}),
    addToDeck: hero => state => ({...state, deck: state.deck.filter(c => c.id !== hero.id).concat([hero])}),
    removeFromDeck: hero => state => ({...state, deck: state.deck.filter(c => c.id !== hero.id)})
  }
}
