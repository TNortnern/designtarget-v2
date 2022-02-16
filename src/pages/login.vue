<template>
  <form class="space-y-4" @submit.prevent="() => submitted = true">
    <AppInput class="w-80" label="Email" placeholder="Email" />
    <AppInput class="w-80" label="Password" type="password" placeholder="Password" />
    <AppButton class="w-full">
      Login
    </AppButton>
    <p v-if="submitted" class="animate-fade-in animate-slow">
      Coming soon...
    </p>
    <div class="text-center mt-3">
      <router-link to="/" class="text-blue-600 duration-200 hover:text-blue-700 text-lg">
        Back to Home
      </router-link>
    </div>
    <Head>
      <title>Login</title>
      <meta name="description" content="Designtarget's login page">
    </Head>
  </form>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>

<script lang="ts" setup>
import { Head } from '@vueuse/head'
const submitted = ref(false)
</script>
