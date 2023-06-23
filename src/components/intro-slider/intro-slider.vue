<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Swiper from 'swiper'

export default {
  setup() {
    const slides = ref([
      {
        image: 'path/to/image1.jpg',
        title: 'Slide 1',
        description: 'Description for slide 1',
        tags: ['Tag 1', 'Tag 2']
      },
      {
        image: 'path/to/image2.jpg',
        title: 'Slide 2',
        description: 'Description for slide 2',
        tags: ['Tag 3', 'Tag 4']
      }
      // Add more slides as needed
    ])

    let swiper = null

    onMounted(() => {
      swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    })

    onBeforeUnmount(() => {
      if (swiper) {
        swiper.destroy()
        swiper = null
      }
    })

    return {
      slides
    }
  }
}
</script>

<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
        <img :src="slide.image" :alt="slide.title" class="w-full" />
        <div class="text-white absolute bottom-10 left-10">
          <h2 class="text-2xl font-bold mb-2">{{ slide.title }}</h2>
          <p class="text-lg mb-2">{{ slide.description }}</p>
          <div class="flex space-x-2">
            <span
              v-for="tag in slide.tags"
              :key="tag"
              class="bg-gray-500 text-white px-2 py-1 rounded"
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<style>
.swiper-slide {
  position: relative;
}
</style>
