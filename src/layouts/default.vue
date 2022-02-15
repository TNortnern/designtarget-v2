<template>
  <div class="pb-12 bg-[#F6F6F6]">
    <Navigation />
    <router-view v-slot="{ Component, route }">
      <transition name="page-fade">
        <component :is="Component" :key="route" />
      </transition>
    </router-view>
    <AppFooter />
  </div>
</template>
