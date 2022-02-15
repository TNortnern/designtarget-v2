<template>
  <div>
    <Hero />
    <div class="mt-33 main-container">
      <div v-for="category in store.categories" :key="category.id" class="mt-16">
        <div class="flex items-center gap-4 mb-4">
          <h2 class="text-3xl font-bold lg:text-4xl capitalize md:w-auto">
            {{ category.title }}
          </h2>
          <AppButton class="text-sm">
            View All
          </AppButton>
        </div>
        <div class="flex flex-wrap items-center gap-6">
          <div v-for="resource in category.resources.slice(0,4)" :key="resource.title" class="w-[23%]">
            <img :src="resource.cover?.data ? resource.cover.data.attributes.formats.thumbnail.url : 'http://placeimg.com/222/156/nightlife'" :alt="resource.title" :title="resource.title">
            <p class="mt-1.5">
              {{ resource.title }}
            </p>
            <p class="mt-2">
              {{ resource.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useRootStore } from '~/stores/root'
const store = useRootStore()
const { categories } = storeToRefs(store)
const allRes = categories.value.forEach((c) => {
  c.resources.filter(r => r.cover).forEach((cv) => {
    if (cv.cover?.data)
      console.log('cv', cv.cover?.data?.attributes.formats.thumbnail)
  })
})
</script>
