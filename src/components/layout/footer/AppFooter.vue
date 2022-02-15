<template>
  <footer class="bg-black rounded-sm main-container text-white mt-12 text-lg">
    <div class="p-10 lg:(flex justify-between text-left) text-center space-y-5 lg:space-y-0">
      <div class="lg:w-[30%]">
        <p class="text-4xl">
          designtarget
        </p>
        <p class="mt-4">
          designtarget is a curated list of design resources that will help you speed up your workflow.
        </p>
      </div>
      <div class="flex flex-wrap justify-center lg:(justify-start)">
        <div>
          <div v-for="route in routes" :key="route.text">
            <router-link class="footer-link" :to="route.to">
              {{ route.text }}
            </router-link>
          </div>
          <p>Videos(coming soon)</p>
          <p>Landing Pages(coming soon)</p>
        </div>
        <div>
          <div>
            <a class="footer-link" href="https://facebook.com/designtargetresources" target="__blank">Facebook</a>
          </div>
          <div>
            <a class="footer-link" href="https://twitter.com/search?q=designtarget&src=typed_query" target="__blank">Twitter</a>
          </div>
        </div>
      </div>
      <div class="lg:w-[30%]">
        <p>Sign up to our newsletter and get notified whenever a new resource is released.</p>
        <div class="relative">
          <input
            placeholder="Search for a resource"
            class="bg-white py-1.5 pl-4 pr-4 md:pr-31 mt-4 text-lg lg:text-xl 2xl:text-lg text-black rounded-full w-full duration-200 focus:(outline-none ring-4 ring-gray-500)"
            type="text"
          >
          <AppButton class=" mt-3 w-full md:(absolute -right-1 top-4 mt-0 w-auto)">
            Subscribe
          </AppButton>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { routes } from '~/constants/routes'

// routes
</script>

<style lang="scss">
.footer-link {
  @apply inline-block hover:text-app-red-1 duration-200;
}
footer {
  .btn-red {
    @apply px-6 py-2 text-base;
  }
}
</style>
