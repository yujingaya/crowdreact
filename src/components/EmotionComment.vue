<template>
  <div class="emotion-comment">
    <div class="field">
      <p class="control">
        <input v-model="message"
          ref="input"
          class="input is-rounded"
          placeholder="What's happening?">
        <transition
          @before-enter="beforeEnter"
          @after-enter="afterEnter">
          <div
            v-show="sending"
            class="plane">
            {{ message }}
          </div>
        </transition>
        <span @click="send"
          class="send-button-container">
          <i class="fas fa-paper-plane"></i>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sending: false,
      message: ''
    }
  },
  methods: {
    send () {
      this.sending = true
      setTimeout(() => {
        this.sending = false
      }, 600)
    },
    beforeEnter (el) {
      const { top, left } = this.$refs.input.getBoundingClientRect()
      el.style.position = 'fixed'
      el.style.top = top + 6 + 'px'
      el.style.left = left + 12 + 'px'
      el.style.fontSize = '1rem'
      el.style.opacity = '0.25'
    },
    afterEnter (el) {
      el.style.top = '1rem'
      el.style.left = 'calc(100% - 1.5rem)'
      el.style.fontSize = '0.75rem'
      el.style.opacity = '1'
    }
  }
}
</script>

<style scoped>
.emotion-comment {
  padding: 1rem 0.5rem;
  align-content: center;
}

.emotion-comment input {
  font-size: 1rem;
  padding-left: 0.75rem;
}

.emotion-comment input:focus {
  border: 1px solid gray;
  box-shadow: none;
}

.control {
  position: relative;
}

.send-button-container {
  position: absolute;
  top: 0rem;
  right: 0rem;
  padding: 0.2rem 0.5rem 0.2rem 0.4rem;
  margin: 0.175rem;
  border-radius: 1rem;
  background-color: var(--theme-blue);

  cursor: pointer;
}

.plane {
  white-space: nowrap;
  transition:
    top 0.4s ease-out,
    left 0.4s ease-in,
    font-size 0.4s ease-in;
}
</style>
