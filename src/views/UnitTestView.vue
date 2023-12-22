<script setup>
import RandomNumber from '@/components/RandomNumber.vue';
</script>

<template>
  <h1>Unit Test</h1>
  <p>
    In this view there are some components that are used for unit test examples
  </p>

  <RandomNumber :min="0" :max="500" />
</template>
