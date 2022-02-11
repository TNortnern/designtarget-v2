<template>
  <component
    :is="$attrs.to ? 'router-link' : 'button'"
    class="btn-red"
  >
    <slot />
  </component>
</template>
