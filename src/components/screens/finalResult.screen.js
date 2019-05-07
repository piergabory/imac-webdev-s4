import { h } from 'hyperapp'
import Chart from '../charts/chart'

export default ({history, startingDeck}) => {
  const getHeroLineGraph = hero => history.map(survivors => survivors.includes(hero) ? 0 : 1)
  const datasets = startingDeck.cards.map(hero => ({data: getHeroLineGraph(hero), label: hero.name}))

  return <div className='wrapper'>
    <p>And the winners are...</p>
    <div className='winnerschart'>
      <p>here comes the graph</p>
      <Chart type='line'
        data={{datasets}}
        options={{scales: {yAxes: [{ stacked: true }]}}}/>
    </div>
  </div>
}
