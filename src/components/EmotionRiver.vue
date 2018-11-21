<template>
  <div class="emotion-river">
    <transition-group name="emotions" tag="div">
      <div
        v-for="emotion in emotions"
        :key="emotion.timestamp"
        class="emotion"
        :class="{ ['is-' + (emotion.timestamp % 3 + 1)]: true }">
        <img class="updown" :src="emoji(emotion.type)"/>
        <span class="sender_id">{{emotion.sender}}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { emotionsRef } from '@/firebase/emotion.js'

export default {
  data () {
    return {
      emotions: [],
      callback: null
    }
  },
  methods: {
    emoji (type) {
      switch (type) {
        case 'angry': return require('@/assets/angry.png')
        case 'bored': return require('@/assets/bored.png')
        case 'curious': return require('@/assets/curious.png')
        case 'like': return require('@/assets/like.png')
        case 'love': return require('@/assets/love.png')
        case 'surprised': return require('@/assets/surprised.png')
      }
    }
  },
  mounted () {
    // @TODO: 이미 백엔드에 있는 이모지는 저장할 필요 없음
    this.callback = emotionsRef.on('child_added', emotion => {
      const { timestamp } = emotion.val()
      // 동기화에 10초면 충분할듯?
      if (Date.now() - timestamp < 10 * 1000) {
        this.emotions.push(emotion.val())
      }
    })
  },
  unmount () {
    emotionsRef.off('child_added', this.callback)
  }
}
</script>

<style>
.emotion-river {
  margin-top: 3rem;
  text-align: center;
  height: 500px;
}

.emotions-enter-active, .emotions-leave-active {
  transition: all 1s;
}

@keyframes sinX {
  to {
    transform: translateX(calc(100vw + 4rem)) scale(0.65);
  }
}

@keyframes sinY {
  to {
    transform: translateY(40px);
  }
}

.emotion {
  position: absolute;
  left: -60px;
  font-size: 2.5rem;
  animation: sinX 1.5s linear;
  height: 2.5rem;
  width: 2.5rem;
}

.emotion.is-1 {
  top: 10vh;
}

.emotion.is-2 {
  top: 20vh;
}

.emotion.is-3 {
  top: 30vh;
}

.updown {
  position: absolute;
  animation: sinY 1.5s alternate ease-in-out;
  border-style: solid;
  border-radius: 100%;
  border-color: white;

}
.sender_id {
  font-size: 20px;
}

</style>
