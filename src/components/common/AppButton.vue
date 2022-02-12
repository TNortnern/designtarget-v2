<template>
  <component
    :is="$attrs.to ? 'router-link' : 'button'"
    v-ripple="25"
    class="btn-red"
  >
    <slot />
  </component>
</template>
