<template>
  <component
    :is="$attrs.to ? 'router-link' : 'button'"
    class="btn-red ripple text-center"
    :class="{ 'pointer-events-none opacity-50': loading }"
  >
    <slot />
    <div v-show="loading" class="inline-flex justify-center items-center">
      <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-100 relative top-1 left-1" />
    </div>
  </component>
</template>

<script lang="ts" setup>
defineProps<{ loading?: boolean }>()
</script>
