<template>
  <a target="__blank" :href="resource.url.includes('https') ? resource.url : `https://${resource.url}`">
    <img
      class="w-full object-cover rounded-md overflow-hidden duration-200 hover:(ring-4)"
      :src="resource.cover?.data ? resource.cover.data.attributes.formats.thumbnail.url : 'http://placeimg.com/222/156/nightlife'"
      :alt="resource.title"
      :title="resource.title"
    >
  </a>
  <div class="mt-1.5 font-bold text-lg flex justify-between">
    <h3>{{ resource.title }}</h3>
    <button class="p-1.8 bg-gray-300 bg-opacity-0 hover:bg-opacity-40 duration-200 rounded-full flex justify-center" @click="liked = !liked">
      <Heart :class="liked ? 'text-red-500' : 'text-black'" :fill="liked ? 'currentColor' : 'none'" />
    </button>
  </div>
  <p class="mt-2">
    {{ resource.description }}
  </p>
</template>

<script lang="ts" setup>
import type { Resource } from '~/stores/root'

defineProps<{ resource: Resource }>()
const liked = ref(false)
</script>
