<template>
  <main class="font-karla text-black bg-[#F6F6F6] min-h-screen relative pb-10">
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
</style>
