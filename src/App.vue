<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="bg-gray-200 p-4">
    <h1 class="text-2xl font-bold">Welcome to my Vue.js app!</h1>
    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Click me</button>
  </div>
  
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
