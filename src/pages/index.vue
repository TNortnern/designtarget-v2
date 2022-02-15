<template>
  <div>
    <Hero />
    <div class="mt-33 main-container">
      <div v-for="category in categories" :key="category.id" class="mt-16">
        <div class="flex justify-between">
          <div class="flex flex-col md:(items-center flex-row) gap-4 mb-4">
            <h2 class="text-3xl font-bold lg:text-4xl capitalize md:w-auto">
              {{ category.title }}
            </h2>
            <AppButton class="text-sm">
              View All
            </AppButton>
          </div>
          <!-- <div class="flex self-center lg:self-auto">
            <img class="w-8 h-8" src="/icons/arrow.svg" alt="arrow">
            <img class="w-8 h-8 transform rotate-180" src="/icons/arrow.svg" alt="arrow">
          </div> -->
        </div>

        <div class="relative">
          <swiper
            :slides-per-view="1.2"
            :space-between="16"
            :breakpoints="{
              '767': {
                'slidesPerView': 3
              },
              '1023': {
                'slidesPerView': 4.1,
                'spaceBetween': 20,
                'allowTouchMove': false
              },
              '1279': {
                'slidesPerView': 4.1,
                spaceBetween: 100,
                'allowTouchMove': false
              }
            }"
            class="relative"
          >
            <swiper-slide v-for="resource in category.resources" :key="resource.title">
              <a target="__blank" :href="resource.url.includes('https') ? resource.url : `https://${resource.url}`">
                <img
                  :src="resource.cover?.data ? resource.cover.data.attributes.formats.thumbnail.url : 'http://placeimg.com/222/156/nightlife'"
                  :alt="resource.title"
                  :title="resource.title"
                >
              </a>
              <p class="mt-1.5 font-bold text-lg">
                {{ resource.title }}
              </p>
              <p class="mt-2">
                {{ resource.description }}
              </p>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useRootStore } from '~/stores/root'
// Import Swiper styles

const store = useRootStore()
const { categories } = storeToRefs(store)
</script>

<style>
@import "swiper/css";
.swiper {
  @apply w-full h-full pt-1 pl-1 -ml-1;
}

.swiper-slide {

}

.swiper-slide img {
  @apply block h-full w-full object-cover rounded-md overflow-hidden duration-200 hover:(ring-4);
}
</style>
