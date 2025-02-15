<script setup>
import { computed } from "vue";

const emit = defineEmits(["openModal"]);
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const backgroundColor = computed(() => {
  const id = props.user.weather.id;

  if (id >= 200 && id < 300) {
    return "bg-red-50 border-red-700"; // Tormentas eléctricas
  } else if (id >= 300 && id < 400) {
    return "bg-blue-100 border-blue-700"; // Llovizna
  } else if (id >= 500 && id < 600) {
    return "bg-green-100 border-green-700"; // Lluvia
  } else if (id >= 600 && id < 700) {
    return "bg-purple-100 border-purple-700"; // Nieve
  } else if (id >= 700 && id < 800) {
    return "bg-yellow-100 border-yellow-700"; // Condiciones atmosféricas
  } else if (id === 800) {
    return "bg-cyan-100 border-cyan-700"; // Cielo despejado
  } else if (id >= 801 && id < 900) {
    return "bg-gray-100 border-gray-700"; // Nubes
  } else {
    return "bg-white border-amber-700"; // Por defecto
  }
});
</script>
<template>
  <div
    @click="emit('openModal', user)"
    class="mb-2 p-4 hover:bg-gray-200 rounded-lg shadow-lg cursor-pointer border border-dashed border-amber-700"
    :class="backgroundColor"
  >
    <div class="flex items-center">
      <div class="flex justify-start items-center gap-2">
        <div
          class="relative w-10 h-10 overflow-hidden bg-gray-200 rounded-full"
        >
            <img
                class="icon-img-small"
                :src="`https://openweathermap.org/img/wn/${user.weather.icon}@2x.png`"
            />
        </div>
        <div>
          <p>
            <strong>{{ user.name }}</strong>
          </p>
          <p class="text-[10px]">{{ user.weather.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
