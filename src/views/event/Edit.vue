<script setup>
defineProps({
  loggedIn: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <p>Edit the event here</p>
  <div class="app-header">
    <button v-show="loggedIn">Edit</button>
  </div>
</template>

<style scoped>
.app-header {
  min-height: 40px;
  padding: 0.2em 1em;
  background: white;
}
</style>
