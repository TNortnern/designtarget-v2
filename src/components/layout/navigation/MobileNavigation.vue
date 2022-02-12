<template>
  <div class="lg:hidden">
    <Hamburger />
    <div class="h-screen w-full fixed inset-0 z-20 bg-black duration-600" :class="mobileNavigation.isDrawerOpen() ? 'opacity-60' : 'opacity-0'" />
    <nav ref="drawer" :class="mobileNavigation.isDrawerOpen() ? 'translate-x-0' : 'translate-x-100'" class="fixed top-0 right-0 z-25 h-screen bg-white md:w-75 w-2/3 duration-350 transform pt-6">
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
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'
import { routes, secondaryRoutes } from '~/constants/routes'
import { useMobileNavigation } from '~/composables/useMobileNavigation'
const drawer = ref(null)
const mobileNavigation = useMobileNavigation()
onClickOutside(drawer, (event) => {
  const el = event.target as HTMLElement
  const clickedHamburger = el.id === 'hamburger' || Array.from(el.classList).includes('hamburger-base')
  // the hamburger isn't actually apart of the drawer so we need to ignore when it's the click element
  if (!clickedHamburger)
    mobileNavigation.toggleDrawer(false)
},
)
</script>
