<template>
  <div class="main-container">
    <template v-if="category">
      <h1 class="text-4xl font-bold capitalize mt-8 mb-7 text-center md:text-left">
        {{ category?.title }}
      </h1>
      <div class="flex flex-wrap justify-center md:justify-between gap-8">
        <div v-for="resource in category?.resources" :key="resource.title" class="column-widths">
          <a target="__blank" :href="resource.url.includes('https') ? resource.url : `https://${resource.url}`">
            <img
              class="w-full object-cover rounded-md overflow-hidden duration-200 hover:(ring-4)"
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
        </div>
        <div class="column-widths" />
        <div class="column-widths" />
        <div class="column-widths" />
      </div>
    </template>
    <div v-else class="mt-8 text-4xl font-bold">
      Couldn't find <span class="capitalize">{{ route.params.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useRootStore } from '~/stores/root'
const route = useRoute()
const store = useRootStore()
const { categories } = storeToRefs(store)
const category = computed(() => categories.value.find(c => c.title === route.params.name))
</script>

<style scoped>
.column-widths {
    @apply w-[86%] md:w-[29%] lg:w-[21%];
}
</style>
