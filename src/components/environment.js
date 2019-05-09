import { h } from 'hyperapp'
import Chart from './charts/chart'
export default ({environment}) =>
  <Chart type='radar' data={{
    datasets: [{
      data: Object.values(environment.statisticsWeights).map(w => parseInt(w)),
      label: environment.name
    }],
    labels: Object.keys(environment.statisticsWeights)
  }}/>
