<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="title">
        <router-link to="/">Rick and Morty</router-link>
      </h1>
    </div>
  </header>
  <main>
    <div class="wrapper">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  box-shadow: 0 1px 5px 1px var(--third-color);
  background-color: var(--primary-color);
}

.title {
  padding: 15px 0;
  width: fit-content;
}

.title a {
  color: var(--secondary-color);
}

main {
  padding: 15px 0;
}
</style>
