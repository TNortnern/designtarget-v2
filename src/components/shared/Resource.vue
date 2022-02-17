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
    <button class="p-1.8 bg-gray-300 bg-opacity-0 hover:bg-opacity-40 duration-200 rounded-full flex justify-center" @click="favoriteItem()">
      <Heart :class="favorited ? 'text-red-500' : 'text-black'" :fill="favorited ? 'currentColor' : 'none'" />
    </button>
  </div>
  <p class="mt-2">
    {{ resource.description }}
  </p>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import type { Resource } from '~/stores/root'
import { useAuthStore } from '~/stores/auth'
import api from '~/api'
const props = defineProps<{ resource: Resource }>()
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
const favoriting = ref(false)
const favorited = computed(() => user.value?.favorites.find(f => f.resource?.id === props.resource?.id))
const router = useRouter()
const favoriteItem = async() => {
  if (favoriting.value) return
  favoriting.value = true
  if (!user.value) return router.push('/login')
  if (!favorited.value)
    user.value.favorites = [...user.value.favorites, { id: 0, resource: props.resource }]

  else
    user.value.favorites = user.value.favorites.filter(f => f.id !== favorited?.value?.id)
  try {
    const { data } = await api.post('/favoriteItem', { resource: props.resource.id, ...(favorited.value && { id: favorited.value.id }) })
    const getRecentlyCreatedEntryIndex = { ...user.value }.favorites.findIndex(f => f.resource.id === props.resource.id)
    user.value.favorites[getRecentlyCreatedEntryIndex] = data?.data
  }
  catch (error) {
    console.error(error)
  }
  finally {
    favoriting.value = false
  }
}
</script>
