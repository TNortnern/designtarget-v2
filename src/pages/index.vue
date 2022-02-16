<template>
  <div>
    <Head>
      <title>Home</title>
      <meta name="description" content="View all of design target's resources">
    </Head>
    <Hero />
    <Collections v-show="!searchTerm" />
    <Search v-show="searchTerm" />
  </div>
</template>

<script lang="ts" setup>
import { Head } from '@vueuse/head'
import { storeToRefs } from 'pinia'
import { useRootStore } from '~/stores/root'
const { searchTerm } = storeToRefs(useRootStore())
</script>
