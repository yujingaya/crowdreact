<template>
  <div>
    <div class="navigation-bar">
      <div class="menu is-left">
        <router-link :to="{
          name: 'emotion',
          params: {
            name: $route.params.name
          }
        }">
          <i class="fas fa-chevron-circle-left"></i>
          {{ $route.params.name }}
        </router-link>
      </div>
      <div class="menu is-right">
        <i class="fas fa-share-alt"></i>
      </div>
    </div>
    <div class="graph-container">
      <Graph/>
      <GraphCommentList/>
      <GraphEmotionButtons/>
    </div>
  </div>
</template>

<script>
import Graph from '@/components/Graph.vue'
import GraphCommentList from '@/components/GraphCommentList.vue'
import GraphEmotionButtons from '@/components/GraphEmotionButtons.vue'

export default {
  components: {
    Graph, GraphCommentList, GraphEmotionButtons
  }
}
</script>

<style scoped>
.navigation-bar {
  background-color: var(--theme-blue);
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
}

.graph-container {
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
}

.graph-container .graph {
  flex-grow: 1;
}
</style>
