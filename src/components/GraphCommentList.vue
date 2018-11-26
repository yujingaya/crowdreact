<template>
  <div class="graph-comment-list">
    <div v-for="comment in comments"
      :key="comment.timestamp"
      class="comment"
      :class="{ 'my-comment': (myId === comment.sender) }">
      <p>{{ comment.content }}</p>
      <div class="time"> {{ comment.time }} </div>
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
      const { content, timestamp, sender } = comment.val()
      const time = new Date(timestamp)
      const timeString = `${time.getHours()}:${time.getMinutes()}`
      this.comments.push({ content, sender, time: timeString })
    })
  },
  unmount () {
    commentsRef.off('child_added', this.callback)
  }
}
</script>

<style>
.graph-comment-list {
  margin: 1rem;
  padding: 0.25rem 0;
  border: 1px solid #dbdbdb;
  border-radius: 0.5rem;
  height: 150px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.comment {
  float: left;
  clear: both;
  margin: 0.25rem 0.5rem 0.25rem;
  border-radius: 0.75rem;
  padding: 0.375rem 0.75rem;
  background-color: whitesmoke;
}

.my-comment{
  text-align: right;
  float: right;
}

.time {
  color: #aaa;
}

/* .scrollbar
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
} */

</style>
