<template>
  <div class="columns is-multiline is-gapless is-mobile emotion-buttons">
    <div v-for="{ emotion, emoji } in items"
      :key="emotion"
      @click="sendEmotion(emotion)"
      class="column is-4"
      :class="{ 'is-first-row': emotion === 'angry' || emotion === 'curious' || emotion === 'love' }">
      <div class="emotion-button">
        <img :src="emoji">
      </div>
    </div>
  </div>
</template>

<script>
import { sendEmotion } from '@/firebase/emotion.js'

export default {
  data () {
    return {
      items: [
        { emotion: 'angry', emoji: require('@/assets/angry.png') },
        { emotion: 'curious', emoji: require('@/assets/curious.png') },
        { emotion: 'love', emoji: require('@/assets/love.png') },
        { emotion: 'bored', emoji: require('@/assets/bored.png') },
        { emotion: 'like', emoji: require('@/assets/like.png') },
        { emotion: 'surprised', emoji: require('@/assets/surprised.png') }
      ]
    }
  },
  methods: {
    sendEmotion (type) {
      this.$ga.event('Feeling Button', 'Pressed', type)
      sendEmotion(type)
    }
  }
}
</script>

<style scoped>
.emotion-buttons .emotion-button {
  position: relative;
  height: 100%;

  padding: 0.75rem;
  border-radius: 1rem;

  border: 1px solid #dbdbdb;
  box-shadow: 0 6px #dbdbdb;
  z-index: 5;

  background: white;
  background: linear-gradient(white, whitesmoke);

  cursor: pointer;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.column {
  border-radius: 1rem;
  box-shadow: 0 4px 6px #dbdbdb;
}

.emotion-button:hover {
  background: var(--theme-yellow);
  background: linear-gradient(#fdeda5, var(--theme-yellow));
  box-shadow: 0 4px #dbdbdb;
  transform: translateY(2px);
}

.emotion-button:active {
  box-shadow: 0 2px #dbdbdb;
  transform: translateY(4px);
}

.is-first-row .emotion-button {
  z-index: 4;
}
</style>
