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
          <img src="@/assets/chart.png">
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
  components: {
    EmotionRiver, EmotionComment, EmotionButtons
  }
}
</script>

<style scoped>
.navigation-bar {
  background-color: var(--theme-yellow);
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
}

.menu.is-right img {
  width: 23px;
  height: 23px;
}

.emotion-container {
  height: calc(100vh - 53px);
  display: flex;
  flex-direction: column;
  background: #2980B9;  /* fallback for old browsers */
  background: linear-gradient( #2980B9,#6DD5FA,#FFFFFF 45%);
  background-color: mediumspringgreen;
}

.emotion-container .emotion-river {
  flex: 1;
}

.emotion-container .emotion-comment {
  flex: none;
  padding: .75rem;
}

.emotion-container .emotion-buttons {
  flex: none;
  padding: 0 .75rem .75rem;
}
</style>
