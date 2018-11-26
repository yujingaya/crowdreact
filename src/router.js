import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList.vue'
import Emotion from './views/Emotion.vue'
import Graph from './views/Graph.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/emotion/:name',
      name: 'emotion',
      component: Emotion,
      beforeEnter (to, from, next) {
        if (to.params.name !== 'Social Computing') {
          alert('Unavailable now.')
          next(false)
          return
        }
        next()
      }
    },
    {
      path: '/graph/:name',
      name: 'graph',
      component: Graph
    }
  ]
})
