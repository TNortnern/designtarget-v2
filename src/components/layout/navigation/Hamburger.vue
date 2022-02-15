<template>
  <button
    id="hamburger" :class="
      mobileNavigation.isDrawerOpen() ? 'fixed right-4 top-6 z-30' : 'relative z-30'

    " class="text-gray-500 w-10 h-10  focus:outline-none lg:hidden" @click="mobileNavigation.toggleDrawer()"
  >
    <span class="sr-only">Open main menu</span>
    <div
      class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <span
        aria-hidden="true"
        class="block absolute hamburger-base bg-current transform transition"
        :class="{ 'rotate-45': mobileNavigation.isDrawerOpen(), ' -translate-y-1.5': !mobileNavigation.isDrawerOpen() }"
      />
      <span
        aria-hidden="true"
        class="block absolute hamburger-base bg-current transform transition"
        :class="{ 'opacity-0': mobileNavigation.isDrawerOpen() }"
      />
      <span
        aria-hidden="true"
        class="block absolute hamburger-base bg-current transform transition"
        :class="{ '-rotate-45': mobileNavigation.isDrawerOpen(), ' translate-y-1.5': !mobileNavigation.isDrawerOpen() }"
      />
    </div>
  </button>
</template>

<script lang="ts" setup>
import { useMobileNavigation } from '~/composables/useMobileNavigation'
const mobileNavigation = useMobileNavigation()
</script>

<style scoped>
.hamburger-base {
    @apply h-0.5 w-5 duration-500 ease-in-out;
}
</style>
