import { h } from 'hyperapp'
import Chart from './chart'

export default ({history}) => {
  const backgroundColors = [
    'rgba(255,0,0,1)',
    'rgba(0,0,255,1)',
    'rgba(0,255,0,1)',
    'rgba(0,255,255,1)',
    'rgba(255,255,0,1)',
    'rgba(255,0,255,1)',
    'rgba(255,125,0,1)',
    'rgba(0,255,125,1)',
    'rgba(125,0,255,1)'
  ]

  const getHeroLineGraph = hero => history.map(survivors => survivors.map(s => s.id).includes(hero.id) ? 1 : 0)

  const data = {
    datasets: history[0].map((hero, index) => ({data: getHeroLineGraph(hero), label: hero.name, lineTension: 0, fill: 'origin', backgroundColor: backgroundColors[index]}))
  }

  const options = {
    scales: {
      yAxes: [{ stacked: true }],
      xAxes: [{
        type: 'category',
        labels: ['Start', ...Array(history.length - 2).fill(0).map((_, index) => `Fight #${index + 1}`), 'End']
      }]
    }
  }

  return <Chart type='line' data={data} options={options}/>
}
