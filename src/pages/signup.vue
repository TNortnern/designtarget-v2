<template>
  <form v-if="resolved" class="space-y-4" @submit.prevent="handleSignup()">
    <ErrorDisplay :errors="errors" />
    <AppInput v-model="form.identifier" class="w-80" label="Email" placeholder="Email" />
    <AppInput v-model="form.password" class="w-80" label="Password" type="password" placeholder="Password" />
    <AppButton :loading="loading" class="w-full capitalize">
      Sign Up
    </AppButton>
    <p class="mt-4 text-center">
      Already have an account? <router-link to="/login" class="font-bold">
        Login
      </router-link>
    </p>
    <BackToHome />
    <Head>
      <title>Register</title>
      <meta name="description" content="Designtarget's sign up page">
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
const router = useRouter()
const store = useAuthStore()
const { user, resolved, loading, errors } = storeToRefs(store)
const { signup } = store
const handleSignup = async() => {
  await signup(form)
  if (user.value) router.push('/')
}
onMounted(() => {
  errors.value = []
})
watch(user, (value) => {
  if (value) router.push('/')
})
</script>
