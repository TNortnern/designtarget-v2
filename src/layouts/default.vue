<template>
  <div class="pb-12 bg-[#F6F6F6] min-h-screen">
    <Navigation />
    <router-view v-slot="{ Component, route }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" :key="route" />
      </transition>
    </router-view>
    <AppFooter v-show="!searchTerm && $route.path !== '/myresources'" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useRootStore } from '~/stores/root'
const { searchTerm } = storeToRefs(useRootStore())
</script>
