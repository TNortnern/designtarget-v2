<template>
  <form class="space-y-4" @submit.prevent="handleLogin()">
    <ErrorDisplay :errors="errors" />
    <AppInput v-model="form.identifier" class="w-80" label="Email" placeholder="Email" />
    <AppInput v-model="form.password" class="w-80" label="Password" type="password" placeholder="Password" />
    <AppButton :loading="loading" class="w-full capitalize">
      Login
    </AppButton>
    <p class="mt-4 text-center">
      Don't have an account? <router-link to="/signup" class="font-bold">
        Sign up
      </router-link>
    </p>
    <BackToHome />
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
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
const form = reactive({
  identifier: '',
  password: '',
})
const store = useAuthStore()
const router = useRouter()
const { user, loading, errors } = storeToRefs(store)
const { login } = store
const handleLogin = async() => {
  await login(form)
  if (user.value) router.push('/')
}
if (user.value) router.push('/')
onMounted(() => {
  errors.value = []
})
</script>
