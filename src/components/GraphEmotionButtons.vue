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
      <div class="counts">{{ emotionsCount[item.emotion] }}</div>
    </div>
  </div>
</template>

<script>
import { emotionsRef } from '@/firebase/emotion.js'

export default {
  data () {
    return {
      emotionsCount: {
        angry: 0,
        curious: 0,
        love: 0,
        bored: 0,
        like: 0,
        surprised: 0
      },
      items: [
        { emotion: 'angry', emoji: require('@/assets/angry.png') },
        { emotion: 'curious', emoji: require('@/assets/curious.png') },
        { emotion: 'love', emoji: require('@/assets/love.png') },
        { emotion: 'bored', emoji: require('@/assets/bored.png') },
        { emotion: 'like', emoji: require('@/assets/like.png') },
        { emotion: 'surprised', emoji: require('@/assets/surprised.png') }
      ],
      callback: null
    }
  },
  mounted () {
    this.callback = emotionsRef.on('child_added', emotion => {
      const { type } = emotion.val()
      this.emotionsCount[type] += 1
    })
  },
  unmount () {
    emotionsRef.off('child_added', this.callback)
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
