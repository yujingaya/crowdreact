<template>
  <div class="emotion-river">
    <transition-group name="emotions" tag="div">
      <div
        v-for="emotion in emotions"
        :key="emotion.time"
        class="emotion"
        :class="{ ['is-' + (emotion.time % 3 + 1)]: true }">
        <img class="updown" :src="emoji(emotion.type)"/>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      emotions: [],
      id: null
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
    this.id = setInterval(() => {
      this.emotions.push({
        type: (() => {
          switch(Date.now() % 6) {
            case 0: return 'angry'
            case 1: return 'bored'
            case 2: return 'curious'
            case 3: return 'like'
            case 4: return 'love'
            case 5: return 'surprised'
          }
        })(),
        time: Date.now()
      })
      this.emotions = this.emotions
        .filter(e => Date.now() - e.time <= 1000)
    }, 1000)
  },
  unmount () {
    clearInterval(this.id)
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
}
</style>
