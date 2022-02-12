<template>
  <div>
    <div class="pt-6 lg:pt-10">
      <div class="lg:(justify-center gap-4) justify-between flex items-center main-container relative">
        <Logo to="/" class="lg:(absolute left-8) 2xl:left-0" />
        <MobileNavigation />
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
  </div>
</template>

<script lang="ts" setup>
import { routes, secondaryRoutes } from '~/constants/routes'
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
