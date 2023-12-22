<script setup>
import { ref, onMounted, computed, watchEffect, defineProps } from 'vue';
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js';
import { useRouter } from 'vue-router';

const props = defineProps(['page']);
const events = ref('');
const page = computed(() => props.page);
const totalEvents = ref(0);

const router = useRouter();

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 2);
  return page.value < totalPages;
});

onMounted(() => {
  watchEffect(() => {
    events.value = null;
    EventService.getEvents(2, page.value)
      .then((response) => {
        events.value = response.data;
        totalEvents.value = response.headers['x-total-count'];
      })
      .catch(() => {
        router.push({ name: 'NetworkError' });
      });
  });
});
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <RouterLink
        v-if="page != 1"
        :to="{ query: { page: page - 1 } }"
        rel="prev"
        class="pagination__link pagination__link--previous"
        >Prev Page
      </RouterLink>

      <RouterLink
        v-if="hasNextPage"
        :to="{ query: { page: page + 1 } }"
        rel="next"
        class="pagination__link pagination__link--next"
        >Next Page</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination__link {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

.pagination__link--previous {
  text-align: left;
}

.pagination__link--next {
  text-align: right;
}
</style>
