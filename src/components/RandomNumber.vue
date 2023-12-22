<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 10,
  },
});

const randomNumber = ref(0);
const getRandomNumber = () => {
  randomNumber.value =
    Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
};
</script>

<template>
  <div class="random-number">
    <p>Random number generator</p>
    <div>
      <span>{{ randomNumber }}</span>
      <button @click="getRandomNumber">Generate</button>
    </div>
  </div>
</template>

<style scoped>
.random-number {
  background-color: #f7f9fc;
  padding: 16px;
}

p {
  margin-top: 0;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 4px;
}

button:hover {
  background-color: #85c1e9;
}
</style>
