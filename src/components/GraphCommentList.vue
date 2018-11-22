<template>
  <div class="graph-comment-list">
    <div class="scrollbar" id="style-2">
      <div class="force-overflow">
      <p
        v-for="comment in comments"
        :key="comment.timestamp"
        class="message"
        :class="{ 'my-message': (myId === comment.sender) }"
        > {{ comment.content }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { commentsRef, myId } from '@/firebase/emotion.js'

export default {
  data () {
    return {
      comments: [],
      callback: null,
      myId
    }
  },
  mounted () {
    this.callback = commentsRef.on('child_added', comment => {
      this.comments.push(comment.val())
    })
  },
  unmount () {
    commentsRef.off('child_added', this.callback)
  }
}
</script>

<style>
.my-message{
  background-color: var(--theme-blue);
}
.message:not(:last-child){
  margin:0;
}

.scrollbar
{
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  height: 6rem;
  background: whitesmoke;
  overflow-y: scroll;
}

#style-2::-webkit-scrollbar-track
{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar
{
  width: 12px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: grey;
}

</style>
