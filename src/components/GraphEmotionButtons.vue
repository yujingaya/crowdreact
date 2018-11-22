<template>
  <!-- <div class="emotion-buttons">
    <div v-for="emotion in ['angry', 'curious', 'love', 'boring', 'like', 'surprise']"
      :key="emotion"
      class="emotion-button">
      {{ emotion }}
    </div>
  </div> -->

  <div class="emotion-buttons">
    <div v-for="item in items"
      :key="item.emotion" align="center">
      <img :src="item.emoji">
      <!-- <div
        v-for="emotion in emotions"
        :key="emotion.type"
        class="counts"
        :class="{ 'my-counts': (item.emotion === emotion.type) }"
        > {{ item.count }} 
      </div> -->
      <div class="counts">{{ item.count }} </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { emotion: 'angry', emoji: require('@/assets/angry.png'), count: 3 },
        { emotion: 'curious', emoji: require('@/assets/curious.png'), count: 7 },
        { emotion: 'love', emoji: require('@/assets/love.png'), count: 5 },
        { emotion: 'bored', emoji: require('@/assets/bored.png'), count: 40 },
        { emotion: 'like', emoji: require('@/assets/like.png'), count: 1 },
        { emotion: 'surprised', emoji: require('@/assets/surprised.png'), count: 5 }
      ]
    }
  }
}
</script>

<style scoped>
.emotion-buttons {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
}
.counts{
  text-size-adjust: initial;
}
.emotion-buttons .emotion-button {
  padding: 3rem;
  text-align: center;
}
</style>
