export default {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: 'angry',
        borderColor: 'rgb(255, 154, 162)',
        backgroundColor: 'rgba(255, 154, 162, 0.3)',
        data: []
      },
      {
        label: 'bored',
        borderColor: 'rgb(178, 220, 247)',
        backgroundColor: 'rgba(178, 220, 247, 0.3)',
        data: []
      },
      {
        label: 'curious',
        borderColor: 'rgb(181, 234, 215)',
        backgroundColor: 'rgba(181, 234, 215, 0.3)',
        data: []
      },
      {
        label: 'like',
        borderColor: 'rgb(199, 206, 234)',
        backgroundColor: 'rgba(199, 206, 234, 0.3)',
        data: []
      },
      {
        label: 'love',
        borderColor: 'rgb(251, 226, 142)',
        backgroundColor: 'rgba(251, 226, 142, 0.3)',
        data: []
      },
      {
        label: 'surprised',
        borderColor: 'rgb(255, 218, 193)',
        backgroundColor: 'rgba(255, 218, 193, 0.3)',
        data: []
      }
    ]
  },
  options: {
    legend: {
      display: false
    }
  }
}
