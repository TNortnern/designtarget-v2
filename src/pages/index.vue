<template>
  <div>
    <Navigation />
    <div class="main-container mt-6">
      <div class="bg-black text-white xl:h-[25rem] 2xl:(pl-16 pr-10) lg:(pl-10 pr-5 h-[22rem]) flex">
        <div class="flex-1 lg:pt-11 xl:pt-13 2xl:pt-9">
          <h2
            class="lg:text-4xl xl:text-5xl leading-15 lg:w-[88%] xl:w-[80%]"
          >
            Design tools to help you get better.
          </h2>
          <p
            class="mt-4 lg:(text-xl w-[80%]) xl:text-2xl 2xl:w-[83%]"
          >
            designtarget is a curated list of design resources that will help you speed up your workflow.
          </p>
          <div class="lg:w-[19rem] xl:w-[29rem]">
            <input
              placeholder="Search for a resource"
              class="bg-white py-2 px-3.5 mt-4 lg:text-xl 2xl:text-2xl text-black rounded-md w-full duration-200 focus:(outline-none ring-4 ring-gray-500)"
              type="text"
            >
          </div>
        </div>
        <!-- <div class="relative"> -->
        <img
          class="relative lg:w-[59%] xl:w-[53%] lg:top-19 xl:top-21.1 xl:top-20.6 ml-auto self-center"
          src="/home/peoplesitting.png"
          alt="people sitting"
        >
      </div>
    </div>
  </div>
</template>
