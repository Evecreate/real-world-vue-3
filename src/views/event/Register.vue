<script setup>
import { defineProps, inject } from "vue";
import { useRouter } from 'vue-router';

const { event } = defineProps(['event']);
const router = useRouter();
const GStore = inject('GStore');

const register = () => {
  GStore.flashMessage = 'You are successfully registered for ' + event.title;
  setTimeout(() => {
    GStore.flashMessage = '';
  }, 3000);
  router.push({
    name: 'EventDetails',
  });
};
</script>
<template>
  <p>Registration form here</p>
  <button @click="register">Register here</button>
</template>
