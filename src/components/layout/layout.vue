<script setup>
  import { Header } from './header'
  import { Footer } from './footer'
</script>

<template>
  <Header />
  
  <main class="content">
      <!-- Main content goes here -->
      <slot></slot>
  </main>

  <Footer />
</template>

<style></style>
