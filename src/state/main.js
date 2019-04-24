export default {
  step: 0,
  isStepComplete: false,

  search: {
    matches: []
  },

  deck: {
    cards: [],
    maxSize: 3,
    preview: null
  },

  round: {
    leftTeam: [],
    rightTeam: [],
    weights: {

    },
    teamSize: 1,
    isLastRound: false
  }
}
