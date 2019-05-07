import { h } from 'hyperapp'
import Chart from './chart'

export default ({hero}) => {
  const powerstats = hero.powerstats

  const chartData = {
    labels: Object.keys(powerstats), // get the powerstats labels,
    datasets: [{
      data: Object.values(powerstats).map(stat => parseInt(stat) || 0), // get the powerstats as integer values,
      backgroundColor: ['#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000']
    }]
  }

  const chartOptions = {
    legend: {display: false},
    scales: {yAxes: [{display: false}]}
  }

  return <Chart type='bar' data={chartData} options={chartOptions}/>
}
