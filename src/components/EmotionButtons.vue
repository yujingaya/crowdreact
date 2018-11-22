<template>
  <div class="emotion-buttons">
    <div v-for="item in items"
      :key="item.emotion"
      @click="sendEmotion(item.emotion)"
      class="emotion-button">
      <img :src="item.emoji">
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
      sendEmotion(type)
    }
  }
}
</script>

<style scoped>
.emotion-buttons {
  margin: 5px auto;
  display: grid;
  grid-template-columns: repeat(3, 30vw);
  grid-template-rows: repeat(2, 30vw);
  gap: 0.5rem;
  padding-bottom: 10px;
}

.emotion-buttons .emotion-button {
  padding: 0.5rem;
  text-align: center;
}

.emotion-button {
-moz-box-shadow:inset 0px 1px 0px 0px #ffffff;
-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;
box-shadow:inset 0px 1px 0px 0px #ffffff;
background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #FFFFFF), color-stop(1,black) );
background:-moz-linear-gradient( center top, #FFFFFF 5%, black 100% );
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf');
background-color:#FFFFFF;
-webkit-border-top-left-radius:6px;
-moz-border-radius-topleft:6px;
border-top-left-radius:6px;
-webkit-border-top-right-radius:6px;
-moz-border-radius-topright:6px;
border-top-right-radius:6px;
-webkit-border-bottom-right-radius:6px;
-moz-border-radius-bottomright:6px;
border-bottom-right-radius:6px;
-webkit-border-bottom-left-radius:6px;
-moz-border-radius-bottomleft:6px;
border-bottom-left-radius:6px;
text-indent:0;
border:1px solid #b7b7b7;
display:inline-block;
color:black;
font-family:arial;
font-size:15px;
font-weight:bold;
font-style:normal;
line-height:50px;
text-decoration:none;
text-align:center;
text-shadow:1px 1px 0px #ffffff;
box-shadow: 0 1.5px gray;
}
.emotion-button:hover {
background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #dfdfdf), color-stop(1, #545454) );
background:-moz-linear-gradient( center top, #dfdfdf 5%, #ededed 100% );
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed');
background-color:var(--theme-yellow);
}
.emotion-button:active {
position:relative;
top:1px;
}

</style>
