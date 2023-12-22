<script setup>
import { ref, defineEmits } from 'vue';
const name = ref('');
const emit = defineEmits('formSubmitted');

const onSubmit = () => {
  emit('formSubmitted', { name: name.value });
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Style for the input */
input[type='text'] {
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

/* Style for the submit button */
button[type='submit'] {
  padding: 8px 15px;
  margin: 5px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type='submit']:hover {
  background-color: #0056b3;
}
</style>
