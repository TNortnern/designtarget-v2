<template>
  <div>
    <div class="main-container mt-6">
      <div class="bg-black text-white xl:h-[25rem] px-12 2xl:(pl-16 pr-10) lg:(pl-10 pr-5 h-[22rem]) flex lg:py-0 pt-11 pb-15">
        <div class="flex-1 lg:pt-11 xl:pt-13 2xl:pt-11.8">
          <h2
            class="text-3xl lg:text-4xl xl:text-4xl lg:leading-13 xl:leading-13 lg:w-[88%] xl:w-[70%]"
          >
            Design tools to help you get better.
          </h2>
          <p
            class="text-lg lg:(text-xl w-[80%]) xl:text-lg 2xl:(w-[77%] mt-6) mt-4"
          >
            designtarget is a curated list of design resources that will help you speed up your workflow.
          </p>
          <div class="lg:w-[19rem] xl:w-[29rem] relative xl:mt-4">
            <img src="/icons/search.svg" alt="" class="absolute left-4 top-8.7">
            <input
              v-model="searchTerm"
              placeholder="Search for a resource"
              class="bg-white py-3.5 pl-11 pr-3.5 mt-4 text-lg lg:text-xl 2xl:text-lg text-black rounded-md w-full duration-200 focus:(outline-none ring-4 ring-gray-500)"
              type="text"
            >
          </div>
        </div>
        <img
          class="relative lg:w-[59%] xl:w-[53%] lg:top-19 xl:top-21.1 xl:top-20.6 ml-auto self-center hidden lg:block"
          src="/home/peoplesitting.png"
          alt="people sitting"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRootStore } from '~/stores/root'
const store = useRootStore()
const { searchTerm } = storeToRefs(store)
</script>
