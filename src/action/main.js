import api from '../api/apiGateway'

export default {
  getHero: id => (_, actions) => {
    return api.getHero(id).then(hero => actions.setHero(hero))
  },

  setHero: hero => state => {
    return ({...state, hero})
  }
}
