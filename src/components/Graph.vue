<template>
  <div class="graph scrollbar1" id="style-2">
    <div class="force-overflow">
      <canvas id="planet-chart" width="400" height="400"></canvas>
    </div>
  </div>

</template>

<script>
import Chart from 'chart.js'
import planetChartData from '../chart-data.js'

export default {
  data () {
    return {
      planetChartData: planetChartData
    }
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      })
    }
  },
  mounted() {
    this.createChart('planet-chart', this.planetChartData)
  }
}
</script>

<style scoped>
.scrollbar1
{
	margin-left: 30px;
	float: left;
	height: 450px;
	width: 300px;
	background: whitesmoke;
  overflow-x: scroll;
	margin-bottom: 25px;
}
.force-overflow
{
	min-width: 300px;
}

#style-2::-webkit-scrollbar-track
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
	background-color: pink;
}

</style>
