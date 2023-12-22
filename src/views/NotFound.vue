
<script setup>
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>

<template>
  <h1>Nope!!!!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <RouterLink :to="{ name: 'EventList' }">Back to the home page</RouterLink>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
