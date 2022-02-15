<template>
  <component
    :is="$attrs.to ? 'router-link' : 'button'"
    class="btn-red ripple text-center"
  >
    <slot />
  </component>
</template>
