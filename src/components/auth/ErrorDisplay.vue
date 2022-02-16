<template>
  <div v-if="errors.length" class="text-red-400 text-center lg:text-left">
    <ul v-if="Array.isArray(errors)" class=" pl-5 list-disc">
      <li v-for="error in errors" :key="error.message">
        {{ error.message }}
      </li>
    </ul>
    <p v-else>
      {{ errors }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { StrapiExposedAuthError } from '~/stores/auth'
defineProps<{ errors: StrapiExposedAuthError[] | string }>()
</script>
