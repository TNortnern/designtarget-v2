<template>
  <div>
    <Hero />
    <div class="mt-33 main-container">
      <div v-for="category in store.categories" :key="category.id">
        <div class="flex gap-4 lg:gap-6 items-center">
          <h2 class="text-3xl font-bold lg:text-4xl capitalize w-52">
            {{ category.title }}
          </h2>
          <AppButton class="text-sm">
            View All
          </AppButton>
        </div>
        <span v-for="resource in category.resources" :key="resource.title">{{ resource.title }}, </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRootStore } from '~/stores/root'
const store = useRootStore()
</script>
