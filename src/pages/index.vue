<template>
  <div>
    <Head>
      <title>Home</title>
      <meta name="description" content="View all of design target's resources">
    </Head>
    <Hero />
    <Collections v-show="!searchTerm" />
    <div class="main-container mt-28 min-h-[137rem] lg:min-h-[27rem]">
      <h1
        class="text-4xl font-bold mt-8 mb-7 text-center md:text-left"
      >
        Search results for {{ searchTerm }}:
      </h1>
      <div class="flex flex-wrap justify-center md:justify-between gap-8">
        <div
          v-for="resource in allResources.filter((r) => r.title.toLowerCase().includes(searchTerm.toLowerCase()))"
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
  </div>
</template>

<script lang="ts" setup>
import { Head } from '@vueuse/head'
import { storeToRefs } from 'pinia'
import { useRootStore } from '~/stores/root'
const { searchTerm, allResources } = storeToRefs(useRootStore())
</script>

<style lang="scss">

</style>
