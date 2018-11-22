<template>
  <div class="chart-field scrollbar1" id="style-2">
    <canvas class="height-fix" id="emotion-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import { emotionsRef } from '@/firebase/emotion.js'
import emotionChartData from '@/chart-data.js'
import debounce from 'lodash/debounce'

// 5분 간격
const period = 5 * 60 * 1000

export default {
  data () {
    return {
      chart: null,
      callback: null,
      start: null
    }
  },
  methods: {
    createChart () {
      this.chart = new Chart('emotion-chart', emotionChartData)
    }
  },
  mounted () {
    this.createChart()
    const updateChart = debounce(() => {
      this.chart.update()
    }, 100)

    const childAdded = emotion => {
      const { timestamp, type } = emotion.val()
      const bucket = Math.floor((timestamp + (period / 2)) / period) * period

      if (this.start === null) {
        this.start = bucket
      }

      const currentLength = this.chart.data.labels.length
      const bucketPosition = (bucket - this.start) / period
      // console.log(currentLength, bucketPosition)
      for (let i = currentLength; i <= bucketPosition; i++) {
        const labelMoment = new Date(this.start + i * period)
        const label = `${labelMoment.getHours()}:${(labelMoment.getMinutes() < 10 ? '0' : '') + labelMoment.getMinutes()}`
        // console.log('label', label)
        this.chart.data.labels.push(label)
        this.chart.data.datasets.forEach(dataset => {
          dataset.data.push(0)
        })
      }

      this.chart.data.datasets.forEach(dataset => {
        if (dataset.label === type) {
          dataset.data[dataset.data.length - 1] += 1
        }
      })
      updateChart()
      // console.log(this.chart.data)
    }

    this.callback = emotionsRef.on('child_added', childAdded)
  },
  unmount () {
    emotionsRef.off('child_added', this.callback)
  }
}
</script>

<style scoped>
/* .height-fix{
  position: relative;
  height: 65%;
  padding-right: 10rem;
} */
/* .chart-field{
  margin-top:1rem;
  align-items: center;
  padding-left: 10rem;
  padding-top: 2rem;
} */
/* .scrollbar1
{
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  height: 30rem;
  background: white;
  overflow-x: scroll;
} */

/* #style-2::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar
{
  width: 12px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: grey;
} */
</style>
