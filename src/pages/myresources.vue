<template>
  <div class="main-container min-h-[56vh]">
    <Head>
      <title>My Resources</title>
      <meta
        name="description"
        :content="`View your collection of resources`"
      >
    </Head>
    <h1
      class="text-4xl font-bold capitalize mt-8 mb-7 text-center md:text-left"
    >
      My Resources
    </h1>
    <template v-if="!loading && resolved">
      <template v-if="resources?.length">
        <transition name="page-fade">
          <div>
            <div class="flex flex-wrap justify-center md:justify-between gap-8">
              <div
                v-for="resource in resources"
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
      <div v-else>
        No resources found.
      </div>
    </template>
    <div v-else class="flex justify-center items-center h-screen fixed inset-0">
      <Spinner />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Head } from '@vueuse/head'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
const authStore = useAuthStore()
const { user, resolved, loading } = storeToRefs(authStore)
const resources = computed(() => user.value?.favorites.map(f => ({
  ...f.resource,
})))
</script>
