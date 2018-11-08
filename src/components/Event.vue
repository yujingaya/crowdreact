<template>
  <div class="event">
    <router-link :to="{ name: 'emotion', params: { name: event.name } }">
      <div class="event-image">
        <img :src="`https://fakeimg.pl/300/282828/eae0d0/?text=${event.image}`">
      </div>
      <div class="event-title">
        {{ event.name }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [ 'event' ]
}
</script>

<style scoped>
.event {
  background-color: whitesmoke;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.06);
}

.event-title {
  padding: 0.5em 0;
  text-align: center;
}
</style>
