<script setup>
import { RouterLink } from 'vue-router'

import Instagram from '@/components/icons/instagram.vue'
import Telegram from '@/components/icons/telegram.vue'
import Twitter from '@/components/icons/twitter.vue'
</script>

<template>
  <footer class="text-white py-7">
    <div class="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div class="flex items-center mb-6 justify-center">
        <a href="#" class="mr-6">
          <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <Instagram />
          </svg>
        </a>
        <a href="#" class="mr-6">
          <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <Telegram />
          </svg>
        </a>
        <a href="#">
          <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <Twitter />
          </svg>
        </a>
      </div>

      <div class="flex items-center justify-center">
        <RouterLink to="/about" class="text-gray-500">Biz haqimizda</RouterLink>
        <div class="h-3 bg-gray-500 mx-5 w-px"></div>
        <RouterLink to="/rules" class="text-gray-500">Foydalanish qoidalari</RouterLink>
        <div class="h-3 bg-gray-500 mx-5 w-px"></div>
        <RouterLink to="/questions" class="text-gray-500">Savol va takliflar</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #1c1c1c;
}
</style>
