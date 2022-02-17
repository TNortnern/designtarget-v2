<template>
  <div>
    <div class="pt-6">
      <div class="lg:(justify-center gap-4) justify-between flex items-center main-container relative">
        <Logo to="/" class="lg:(absolute left-8) 2xl:left-0" />
        <MobileNavigation />
        <div class="route-links">
          <router-link v-for="route in routesToRender(routes)" :key="route.text" active-class="text-app-red-1 font-bold" :to="route.to">
            {{ route.text }}
          </router-link>
        </div>
        <div class="route-links absolute lg:right-8 2xl:right-0">
          <router-link v-for="route in routesToRender(secondaryRoutes)" :key="route.text" :class="route.class" :to="route.to">
            {{ route.text }}
          </router-link>
          <template v-if="!resolved">
            <Spinner />
          </template>
          <template v-if="user">
            <router-link to="/myresources" class="route-links">
              My Resources
            </router-link>
            <AppButton @click="authStore.logout()">
              Logout
            </AppButton>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import type { NavigationRoute } from '~/constants/routes'
import { routes, secondaryRoutes } from '~/constants/routes'
import { useAuthStore } from '~/stores/auth'
const authStore = useAuthStore()
const { user, resolved } = storeToRefs(authStore)
const routesToRender = (routesToCheck: NavigationRoute[]) => {
  return routesToCheck.filter((r) => {
    if (r.guest) {
      if (resolved.value && !user.value) return r
      else return false
    }

    return r
  })
}
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
