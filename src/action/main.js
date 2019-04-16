import api from '../api/apiGateway'

export default {
  search: searchedExpression => (_, actions) => {
    api.searchHero(searchedExpression).then(response => actions.fillAutocompleteTable(response.results))
  },

  setHero: hero => state => ({...state, hero}),

  fillAutocompleteTable: heroes => state => {
    const notInDeckHeroes = heroes.filter(h => !state.cards.deck.map(c => c.id).includes(h.id))
    return {...state, autocomplete: notInDeckHeroes}
  },

  updateAutoCompleteTable: () => (state, actions) => actions.fillAutocompleteTable(state.autocomplete),

  addToDeck: hero => (state, actions) => {
    console.log(state)
    if (state.cards.deck.length >= state.cards.deckMaxSize) return state
    setTimeout(actions.updateAutoCompleteTable)
    return {...state, cards: {...state.cards, deck: state.cards.deck.filter(c => c.id !== hero.id).concat([hero])}}
  },

  removeFromDeck: hero => (state, actions) => {
    if (state.cards.deck.length === 0) return state
    setTimeout(actions.updateAutoCompleteTable)
    return {...state, cards: {...state.cards, deck: state.cards.deck.filter(c => c.id !== hero.id)}}
  }
}
