<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '@/stores/todoList';

const todo = ref('');
const store = useTodoListStore();

function addItemAndClear(item) {
  if (item.length === 0) {
    return;
  }
  store.addTodo(item);
  todo.value = '';
}
</script>
<template>
  <form @submit.prevent="addItemAndClear(todo)">
    <input v-model="todo" type="text" /><button>Add</button>
  </form>
</template>

<style scoped>
form {
  margin-bottom: 15px;
}

input[type='text'] {
  padding: 8px;
  border: 1px solid #3498db;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

input[type='text']:focus {
  border-color: #85c1e9;
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
