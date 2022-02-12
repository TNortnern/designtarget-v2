<template>
  <div>
    <Hero />
    <div class="mt-33 main-container">
      <p v-for="category in store.categories" :key="category.id">
        {{ category.title }}
        <br>

        <span v-for="resource in category.resources" :key="resource.title">{{ resource.title }}, </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRootStore } from '~/stores/root'
const store = useRootStore()
</script>
