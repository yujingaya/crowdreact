<template>
  <div id="emotionButtons">
    <div v-for="emotion in emotions"
      :key="emotion"
      @click="sendEmotion(emotion)"
      class="emotionButton">
      <img :src="emotion.emoji_path">
      {{ emotion }}
    </div>
  </div>
</template>

<script>
import { sendEmotion } from '@/firebase/emotion.js'
import Vue from 'vue'

var emotionButtons = new Vue({
  el: '#emotionButtons',
  data: {
    emotions: [{
      emotion_type: 'angry',
      emoji_path: '@/assets/angry.png'
    }, {
      emotion_type: 'curious',
      emoji_path: '@/assets/curious.png'
    }, {
      emotion_type: 'love',
      emoji_path: '@/assets/love.png'
    }, {
      emotion_type: 'bored',
      emoji_path: '@/assets/bored.png'
    }, {
      emotion_type: 'like',
      emoji_path: '@/assets/like.png'
    }, {
      emotion_type: 'surprised',
      emoji_path: '@/assets/surprised.png'
    }]
  }
})

export default {
  methods: {
    sendEmotion (type) {
      sendEmotion(type)
    }
  }
}
</script>

<style scoped>
.emotionButtons {
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
}

.emotionButtons .emotionButton {
  padding: 1rem;
  text-align: center;
}
</style>
