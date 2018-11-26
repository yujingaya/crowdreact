<template>
  <div>
    <div class="menu-bar">
      <!-- <i class="fa fa-ellipsis-h"></i> -->
      Events
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
          name: 'Social Computing',
          image: 'https://fakeimg.pl/300/282828/eae0d0/?text=CS473',
          type: 'SEMINAR',
          key: 3
        },
        {
          name: 'Seminar',
          image: 'https://fakeimg.pl/300/282828/eae0d0/?text=HCI@KAIST',
          type: 'SEMINAR',
          key: 2
        },
        {
          name: 'ALL DAY OUT',
          image: 'http://img.wemep.co.kr/deal/0/538/4025380/f2d4bcc4faab70312dfdfddef6cf642758820d5b.jpg',
          type: 'FESTIVAL',
          key: 1
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
  text-align: center;
  font-weight: bold;
  color: #222;
  padding: 0.75rem;
  font-size: 1.5rem;
  line-height: 1;
  background-color: var(--theme-blue);
}

.event-filter {
  display: flex;
  text-align: center;
}

.event-filter > .event-filter-kind {
  cursor: pointer;
  padding: 0.5rem 0;
  color: grey;
  flex: 1;
}

.event-filter > .event-filter-kind:hover {
  color: #444;
  background-color: #f0f0f0;
}

.event-filter > .event-filter-kind.is-active {
  background-color: var(--theme-yellow);
  color: black;
}

.event-list {
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  margin: -0.25rem -0.25rem 0;
}
</style>
