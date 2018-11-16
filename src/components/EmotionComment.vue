<template>
  <div class="emotion-comment">
    <div class="field">
      <p class="control has-icons-right">
        <input class="input" placeholder="What's happening?">
      </p>
      <span class="icon is-small is-right">
        <button class="send">
          <i class="fas fa-paper-plane"></i></button>
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.emotion-comment {
padding: 1rem 0.5rem;
align-content: center;
}

.emotion-comment input {
font-size: 1rem;
padding: 0.3rem;
/* width: 96%; */
border-color:darkblue;
}

.send {
font-size: 20px;
border: none;
position: absolute;
top: 40%;
right: 5%;
margin-left: -0.5em;
margin-top: -0.5em;
background-color: transparent;
padding: 0;
cursor: pointer;
color: green;
}
.send:focus {
outline: none;
animation: fly 1000ms ease;
}

@keyframes fly {
10% {
  top: 10px
}
60% {
  top: 60px;
  opacity: 0.5
}
100% {
  top: 100px;
  opacity: 0
}
}
</style>
