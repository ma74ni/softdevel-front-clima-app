<script setup>
defineProps({
  user: Object,
  show: Boolean,
});
const emit = defineEmits(["close"]);
</script>

<template>
    <div
      v-if="show"
      class="fixed inset-0 bg-black/50 flex justify-center items-center"
    >
      <div  class="bg-white p-6 rounded-lg shadow-lg sm:w-60 md:w-96 bg-right-top bg-no-repeat"
      :style="{ backgroundImage: `url(https://openweathermap.org/img/wn/${user.weather.icon}@2x.png)`}">
        <h2 class="text-xl font-bold">{{ user?.name }}</h2>
        <p class="text-[10px]">lat: {{ user?.latitude }} | lon: {{ user?.longitude }}</p>
        <div class="rounded-lg text-gray-700 flex justify-between items-center">
            <div class="text-sm">
                <p class="p-0 m-0">{{ user?.weather?.description }}</p>
                <p class="p-0 m-0">Min: {{ user?.weather?.temp_min }} | Máx: {{ user?.weather?.temp_max }} </p>
            </div>
            <div class="flex">
                <p class="text-[30px] font-bold">{{ user?.weather?.temp }}</p>
                <p class="text-sm">°C</p>
            </div>
        </div>
        <div class="flex justify-end">
            <button @click="emit('close')" class="mt-4 px-4 py-2 text-emerald-800 rounded-lg cursor-pointer hover:bg-gray-200">Cerrar</button>
        </div>
      </div>
    </div>
  </template>