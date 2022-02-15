<template>
  <div class="lg:hidden">
    <Hamburger />
    <transition name="overlay">
      <div v-if="mobileNavigation.isDrawerOpen()" class="h-screen w-full fixed inset-0 z-20 bg-black duration-600" />
    </transition>
    <transition name="drawer">
      <nav v-if="mobileNavigation.isDrawerOpen()" ref="drawer" class="fixed top-0 right-0 h-screen z-25 bg-white md:w-75 w-2/3 duration-350 transform pt-6">
        <div class="border-b-2 pb-5 pl-4">
          <div class="inline-block">
            <Logo to="/" class="font-bold" />
          </div>
        </div>
        <div class="mt-4 px-5">
          <router-link v-for="route in [...routes, ...secondaryRoutes]" :key="route.text" :to="route.to" class="block py-3.5 text-sm">
            {{ route.text }}
          </router-link>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { routes, secondaryRoutes } from '~/constants/routes'
import { useMobileNavigation } from '~/composables/useMobileNavigation'
const drawer = ref(null)
const mobileNavigation = useMobileNavigation()
const route = useRoute()
watch(() => route.path, () => {
  if (mobileNavigation.isDrawerOpen()) mobileNavigation.toggleDrawer(false)
})
onClickOutside(drawer, (event) => {
  const el = event.target as HTMLElement
  const clickedHamburger = el.id === 'hamburger' || Array.from(el.classList).includes('hamburger-base')
  // the hamburger isn't actually apart of the drawer so we need to ignore when it's the click element
  if (!clickedHamburger)
    mobileNavigation.toggleDrawer(false)
},
)
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  @apply transition-all duration-500;
}

.overlay-leave-to,
.overlay-enter-from {
  @apply opacity-0;
}

.drawer-enter-active, .drawer-leave-active {
  @apply transition-all duration-400;
}
.drawer-leave-to, .drawer-enter-from {
  @apply transform translate-x-80;
}
</style>
