<template>
  <div class="emotion-buttons">
    <div v-for="emotion in ['angry', 'curious', 'love', 'boring', 'like', 'surprise']"
      :key="emotion"
      @click="sendEmotion(emotion)"
      class="emotion-button">
      {{ emotion }}
    </div>
  </div>
</template>

<script>
import { sendEmotion } from '@/firebase/emotion.js'

export default {
  methods: {
    sendEmotion (type) {
      sendEmotion(type)
    }
  }
}
</script>

<style scoped>
.emotion-buttons {
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
}

.emotion-buttons .emotion-button {
  padding: 1rem;
  text-align: center;
}
</style>
