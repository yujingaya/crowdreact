<template>
  <div class="event-container">
    <div class="event">
      <div class="link-wrapper">
        <router-link
          :to="{ name: 'emotion', params: { name: event.name } }">
          <div class="event-image">
            <img :src="`https://fakeimg.pl/300/282828/eae0d0/?text=${event.image}`">
          </div>
          <div class="event-title">
            {{ event.name }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'event' ]
}
</script>

<style scoped>
.event-container {
  flex: none;
  width: 50%;
  padding: 0.25rem;
}

.event {
  /* padding: 0.25rem; */
}

.link-wrapper {
  box-shadow: 0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.06);
}

.link-wrapper:hover {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.event-image {
  line-height: 1;
}

.event-title {
  padding: 0.5em 0;
  background-color: whitesmoke;
  text-align: center;
  height: 4rem;
}
</style>
