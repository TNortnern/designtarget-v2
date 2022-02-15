<template>
  <div>
    <Hero />
    <div class="mt-33 main-container">
      <div v-for="category in categories" :key="category.id" class="mt-16">
        <div class="flex items-center gap-4 mb-4">
          <h2 class="text-3xl font-bold lg:text-4xl capitalize md:w-auto">
            {{ category.title }}
          </h2>
          <AppButton class="text-sm">
            View All
          </AppButton>
        </div>

        <div>
          <swiper
            :slides-per-view="4"
            :space-between="30"
            :pagination="{
              clickable: true,
            }"
            class="mySwiper"
          >
            <swiper-slide v-for="resource in category.resources" :key="resource.title">
              <img :src="resource.cover?.data ? resource.cover.data.attributes.formats.thumbnail.url : 'http://placeimg.com/222/156/nightlife'" :alt="resource.title" :title="resource.title">
              <p class="mt-1.5 font-bold text-lg">
                {{ resource.title }}
              </p>
              <p class="mt-2">
                {{ resource.description }}
              </p>
            </swiper-slide>
          </swiper>
          <!-- <div v-for="resource in category.resources.slice(0,4)" :key="resource.title" class="w-[23%]">
            <img :src="resource.cover?.data ? resource.cover.data.attributes.formats.thumbnail.url : 'http://placeimg.com/222/156/nightlife'" :alt="resource.title" :title="resource.title">
            <p class="mt-1.5">
              {{ resource.title }}
            </p>
            <p class="mt-2">
              {{ resource.description }}
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import { useRootStore } from '~/stores/root'
// Import Swiper styles
import 'swiper/css'

const store = useRootStore()
const { categories } = storeToRefs(store)
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {

}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
