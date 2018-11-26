<template>
  <div class="event-container">
    <div class="event">
      <div class="link-wrapper">
        <router-link
          :to="{ name: 'emotion', params: { name: event.name } }">
          <div class="event-image">
            <img :src="event.image">
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
  padding: 0.25rem;
}

.event-image img{
  line-height: 1;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.event-image img:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.event-title {
  padding: 0.25em 0 1rem;
  color: rgb(186, 175, 166);
  font-weight: bold;
  text-align: center;
}
</style>
