<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>

    <h3>
      <p>
        It looks like you're experiencing some network issues, please take a
        breath try again later
      </p>
      <button @click="$router.go(-1)">click here</button>
    </h3>
  </div>
</template>
