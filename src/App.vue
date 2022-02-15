<template>
  <main class="font-karla text-black min-h-screen relative">
    <router-view />
  </main>
</template>

<style>
@font-face {
  font-family: Karla;
  src: url('~/assets/fonts/Karla-Regular.ttf');
  font-weight: 400;
}
@font-face {
  font-family: Karla;
  src: url('~/assets/fonts/Karla-Bold.ttf');
  font-weight: 700;
}
.page-fade-enter-active,
.page-fade-leave-active {
  transition-duration: 0.7s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}
.page-fade-enter-from,
.page-fade-leave-active {
  opacity: 0;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.remove-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.remove-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
