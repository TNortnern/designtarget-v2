<template>
  <div class="pt-6 lg:pt-10">
    <div class="lg:(justify-center gap-4) justify-between flex items-center main-container relative">
      <div class="flex items-center gap-3 lg:(absolute left-8) 2xl:left-0">
        <img src="/logo.png" alt="designtarget logo">
        designtarget
      </div>
      <Hamburger />
      <div class="route-links">
        <router-link v-for="route in routes" :key="route.text" :to="route.to">
          {{ route.text }}
        </router-link>
      </div>
      <div class="route-links absolute lg:right-8 2xl:right-0">
        <router-link v-for="route in secondaryRoutes" :key="route.text" :class="route.class" :to="route.to">
          {{ route.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const routes = [
  {
    text: 'Illustrations',
    to: '/illustrations',
  },
  {
    text: 'Images',
    to: '/images',
  },
  {
    text: 'Icons',
    to: '/icons',
  },
]
const secondaryRoutes = [
  {
    text: 'Login',
    to: '/login',
  },
  {
    text: 'Sign Up',
    to: '/signup',
    class: 'btn-red',
  },
]
</script>

<style lang="scss" scoped>
.route-links {
  @apply lg:(flex items-center gap-8) hidden;
  a {
    &:not(.btn-red) {
      @apply hover:text-app-red-1 duration-200;
    }
  }
}
</style>
