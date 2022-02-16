<template>
  <div>
    <div class="flex">
      <img class="h-screen w-1/2 hidden lg:block" src="/auth/authimage.png" alt="desk material">
      <div class="flex justify-center items-center w-full">
        <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route" />
        </router-view>
      </div>
    </div>
  </div>
</template>
