<template>
  <div class="main-container">
    <Head>
      <title>{{ `Collection - ${capitalize(category?.title || '')}` }}</title>
      <meta
        name="description"
        :content="`Design Target's collection of ${capitalize(
          category?.title || ''
        )}`"
      >
    </Head>
    <template v-if="category">
      <transition name="page-fade">
        <div>
          <h1
            class="text-4xl font-bold capitalize mt-8 mb-7 text-center md:text-left"
          >
            {{ category?.title }}
          </h1>
          <div class="flex flex-wrap justify-center md:justify-between gap-8">
            <div
              v-for="resource in category?.resources"
              :key="resource.title"
              class="column-widths"
            >
              <Resource :resource="resource" />
            </div>
            <div class="column-widths" />
            <div class="column-widths" />
            <div class="column-widths" />
          </div>
        </div>
      </transition>
    </template>
    <div v-else class="mt-8 text-4xl font-bold">
      Couldn't find
      <span class="capitalize">{{ route.params.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Head } from '@vueuse/head'
import { storeToRefs } from 'pinia'
import { useRootStore } from '~/stores/root'
import { capitalize } from '~/helpers'
const route = useRoute()
const store = useRootStore()
const { categories } = storeToRefs(store)
const category = computed(() => categories.value.find(c => c.title === route.params.name))
</script>
