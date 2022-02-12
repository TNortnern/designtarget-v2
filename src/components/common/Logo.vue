<template>
  <component :is="$attrs.to ? 'router-link' : 'div'" class="flex items-center gap-3">
    <img src="/logo.png" alt="designtarget logo">
    designtarget
  </component>
</template>
