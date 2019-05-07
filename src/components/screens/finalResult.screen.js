import { h } from 'hyperapp'
import Chart from '../heroChart'

export default ({history, startingDeck}) => {
  const getHeroLineGraph = hero => history.map(survivors => survivors.includes(hero) ? 0 : 1)
  const datasets = startingDeck.cards.map(hero => ({data: getHeroLineGraph(hero), label: hero.name}))

  return <div class='wrapper'>
    <Chart type='line'
      data={{datasets}}
      options={{scales: {yAxes: [{ stacked: true }]}}}/>
  </div>
}
