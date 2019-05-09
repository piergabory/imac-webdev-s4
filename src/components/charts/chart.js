import { h } from 'hyperapp'
import ChartJS from 'chart.js'

export default ({type, data, options = {}, width = 200, height = 100}) =>
  <canvas
    width={width} height={height}
    oncreate={ canvas => {
      const ctx = canvas.getContext('2d')
      const chart = new ChartJS(ctx, {type, data, options})
      return {
        ...canvas,
        width: canvas.parentElement.clientWidth,
        height: canvas.parentElement.clientHeight
      }
    }}>
  </canvas>
