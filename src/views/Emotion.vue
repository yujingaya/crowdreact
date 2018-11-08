<template>
  <div>
    <div class="navigation-bar">
      <div class="menu is-left">
        <router-link to="/">
          <i class="fas fa-chevron-circle-left"></i>
          {{ $route.params.name }}
        </router-link>
      </div>
      <div class="menu is-right">
        <router-link :to="{
          name: 'graph',
          params: {
            name: $route.params.name
          }
        }">
          <i class="fas fa-chart-line"></i>
        </router-link>
      </div>
    </div>
    <div class="emotion-container">
      <EmotionRiver/>
      <EmotionComment/>
      <EmotionButtons/>
    </div>
  </div>
</template>

<script>
import EmotionRiver from '@/components/EmotionRiver.vue'
import EmotionComment from '@/components/EmotionComment.vue'
import EmotionButtons from '@/components/EmotionButtons.vue'

export default {
  components: { EmotionRiver, EmotionComment, EmotionButtons }
}
</script>

<style scoped>
.navigation-bar {
  background-color: var(--theme-yellow);
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
}

.emotion-container {
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
}

.emotion-container .emotion-river {
  flex-grow: 1;
}
</style>
