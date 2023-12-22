<script setup>
import { useTodoListStore } from '@/stores/todoList';
import { storeToRefs } from 'pinia';

const store = useTodoListStore();

// storeToRefs lets todoList keep reactivity:
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;
</script>

<template>
  <div class="item-list">
    <div v-for="todo in todoList" :key="todo.id" class="item">
      <span :class="{ content: true, completed: todo.completed }">{{
        todo.item
      }}</span>
      <span class="icon checkmark" @click.stop="toggleCompleted(todo.id)"
        >&#10004;</span
      >
      <span class="icon delete" @click="deleteTodo(todo.id)">&#10060;</span>
    </div>
</div>
</template>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
}
.checkmark {
  cursor: pointer;
  margin-left: 8px;
}
.item {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
.icon {
  font-size: 24px;
}
</style>
