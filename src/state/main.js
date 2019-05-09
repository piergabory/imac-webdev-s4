export default {
  step: 0,
  isStepComplete: false,

  search: {
    matches: [],
    isDeckFull: false,
    maxResults: 6
  },

  deck: {
    cards: [],
    maxSize: 6,
    preview: null
  },

  round: {
    leftTeam: [],
    rightTeam: [],
    environment: null,
    teamSize: 2,
    isLastRound: false
  },

  history: [],

  actionLabel: 'Start'
}
