<template>
  <div>
    <div class="menu-bar">
      ...
    </div>
    <div class="event-filter">
      <div v-for="type in ['ALL', 'FESTIVAL', 'SEMINAR']"
        :key="type"
        @click="currentType = type"
        class="event-filter-kind"
        :class="{ 'is-active': type == currentType }">
        {{ type }}
      </div>
    </div>
    <div class="event-list">
      <Event
        v-for="event in filteredEvents"
        :key="event.key"
        :event="event"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Event from '@/components/Event.vue'

export default {
  data () {
    return {
      currentType: 'ALL',
      events: [
        {
          name: 'ALL DAY OUT',
          image: 'ALL DAY OUT',
          type: 'FESTIVAL',
          key: 1
        },
        {
          name: 'Reconfigurable Human-Machine...',
          image: 'HCI@KAIST',
          type: 'SEMINAR',
          key: 2
        }
      ]
    }
  },
  computed: {
    filteredEvents () {
      return this.events.filter(event =>
        this.currentType === 'ALL' ||
        event.type === this.currentType
      )
    }
  },
  components: {
    Event
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-bar {
  text-align: right;
  padding: 0.75rem;
  background-color: var(--theme-blue);
}
.event-filter {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
}

.event-filter > .event-filter-kind {
  padding: 0.75rem 0;
  color: red;
  font-weight: bold;
}

.event-filter > .event-filter-kind.is-active {
  background-color: var(--theme-yellow);
  color: black;
}

.event-list {
  margin: 0.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}
</style>
