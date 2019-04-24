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
    environment: null,
    teamSize: 1,
    isLastRound: false
  }
}
