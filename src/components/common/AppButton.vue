<template>
  <component
    :is="$attrs.to ? 'router-link' : 'button'"
    class="btn-red ripple"
  >
    <slot />
  </component>
</template>
