<template>
  <div class="columns is-mobile is-gapless is-multiline emotions">
    <div v-for="item in items"
      :key="item.emotion"
      class="column is-4">
      <div class="emotion">
        <img :src="item.emoji">
        <div class="count">{{ emotionsCount[item.emotion] }}</div>
      </div>
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
.emotions {
  padding: 0.5rem 1rem 0;
  text-align: center;
  max-width: 360px;
  margin: 0 auto;
}

.emotions .emotion {
  position: relative;
  left: -1rem;
}

.emotions .emotion img {
  margin-bottom: 0.5rem;
  height: auto;
  width: 50px;
}

.emotions .emotion .count {
  position: absolute;
  right: 0;
  top: 12px;
  color: gray;
}
</style>
