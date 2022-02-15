<template>
  <div class="relative">
    <label
      class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
    >{{ label }}</label>
    <input
      :value="modelValue"
      :type="type"
      class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:(ring-2 ring-blue-600) duration-200"
      :placeholder="placeholder"
      @input="handleInput($event)"
    >
    <!-- <ErrorMessage :message="errorMessage" /> -->
  </div>
</template>
<script lang="ts" setup>

withDefaults(defineProps<{
  label: string
  modelValue?: string
  placeholder?: string
  errorMessage?: string
  type?: string
}>(), { type: 'text' })
const emit = defineEmits(['update:modelValue'])
const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
<style>
</style>
