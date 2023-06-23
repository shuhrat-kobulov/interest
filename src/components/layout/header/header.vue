<script setup>
import { RouterLink } from 'vue-router'

import Logo from '@/components/icons/logo.vue'
import SearchIcon from '@/components/icons/search-icon.vue'
</script>

<template>
  <header class="bg-header-color text-white">
    <div class="bg-orange-line"></div>

    <div class="container mx-auto py-4 flex flex-wrap items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <Logo />
      </div>

      <!-- Navigation Links -->
      <nav>
        <ul class="flex flex-wrap space-x-6 mt-4 sm:mt-0 sm:ml-auto justify-center">
          <li>
            <RouterLink to="/" class="hover:text-white text-gray-400">
              Zamonaviy bilimlar
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/grants" class="hover:text-white text-gray-400">Grantlar</RouterLink>
          </li>
          <li>
            <RouterLink to="/languages" class="hover:text-white text-gray-400"
              >Chet tillari</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/news" class="hover:text-white text-gray-400">Yangiliklar</RouterLink>
          </li>
          <li>
            <RouterLink to="/conferences" class="hover:text-white text-gray-400">
              Tadbir va konferensiyalar
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Search Input -->
      <div class="relative mt-4 sm:mt-0">
        <SearchIcon />
        <input
          type="text"
          class="bg-gray-800 text-white rounded-lg py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-305"
          placeholder="Search"
        />
      </div>
    </div>
  </header>
</template>

<style>
.bg-header-color {
  background-color: #0f0f0f;
}

.bg-orange-line {
  height: 2px;
  background-color: #ff5b25;
}
.w-305 {
  width: 305px;
  background-color: #2b2b2b;
}
</style>
