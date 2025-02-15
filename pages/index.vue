<script setup>
import UserCard from "@/components/UserCard.vue";

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`);
    users.value = await response.json();
    /* users.value = [
  {
    "name": "Juan Perez",
    "latitude": 19.4326,
    "longitude": -99.1332,
    "weather": {
      "id": 220,
      "main": "Clear",
      "description": "cielo despejado",
      "icon": "01d",
      "temp": 22,
      "feels_like": 21,
      "temp_min": 20,
      "temp_max": 24,
      "countryName": "Ciudad de México"
    }
  },
  {
    "name": "Ana Gomez",
    "latitude": 40.7128,
    "longitude": -74.0060,
    "weather": {
      "id": 310,
      "main": "Clouds",
      "description": "algo de nubes",
      "icon": "02d",
      "temp": 18,
      "feels_like": 17,
      "temp_min": 16,
      "temp_max": 20,
      "countryName": "New York"
    }
  },
  {
    "name": "Carlos Ruiz",
    "latitude": 34.0522,
    "longitude": -118.2437,
    "weather": {
      "id": 500,
      "main": "Rain",
      "description": "lluvia ligera",
      "icon": "10d",
      "temp": 15,
      "feels_like": 14,
      "temp_min": 13,
      "temp_max": 17,
      "countryName": "Los Angeles"
    }
  },
  {
    "name": "Maria Lopez",
    "latitude": 41.8781,
    "longitude": -87.6298,
    "weather": {
      "id": 600,
      "main": "Snow",
      "description": "nieve ligera",
      "icon": "13d",
      "temp": -2,
      "feels_like": -4,
      "temp_min": -3,
      "temp_max": 0,
      "countryName": "Chicago"
    }
  },
  {
    "name": "Luis Martinez",
    "latitude": 51.5074,
    "longitude": -0.1278,
    "weather": {
      "id": 701,
      "main": "Mist",
      "description": "neblina",
      "icon": "50d",
      "temp": 8,
      "feels_like": 7,
      "temp_min": 7,
      "temp_max": 9,
      "countryName": "Londres"
    }
  },
  {
    "name": "Sofia Hernandez",
    "latitude": 48.8566,
    "longitude": 2.3522,
    "weather": {
      "id": 802,
      "main": "Clouds",
      "description": "nubes dispersas",
      "icon": "03d",
      "temp": 12,
      "feels_like": 11,
      "temp_min": 10,
      "temp_max": 14,
      "countryName": "Paris"
    }
  },
  {
    "name": "Jorge Torres",
    "latitude": 35.6895,
    "longitude": 139.6917,
    "weather": {
      "id": 800,
      "main": "Drizzle",
      "description": "llovizna",
      "icon": "09d",
      "temp": 18,
      "feels_like": 17,
      "temp_min": 16,
      "temp_max": 20,
      "countryName": "Tokyo"
    }
  },
  {
    "name": "Fernanda Jimenez",
    "latitude": 55.7558,
    "longitude": 37.6173,
    "weather": {
      "id": 601,
      "main": "Snow",
      "description": "nieve",
      "icon": "13d",
      "temp": -5,
      "feels_like": -7,
      "temp_min": -6,
      "temp_max": -4,
      "countryName": "Moscú"
    }
  },
  {
    "name": "Ricardo Vargas",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "weather": {
      "id": 200,
      "main": "Thunderstorm",
      "description": "tormenta eléctrica",
      "icon": "11d",
      "temp": 20,
      "feels_like": 19,
      "temp_min": 18,
      "temp_max": 22,
      "countryName": "San Francisco"
    }
  },
  {
    "name": "Patricia Castro",
    "latitude": -33.8688,
    "longitude": 151.2093,
    "weather": {
      "id": 803,
      "main": "Clouds",
      "description": "nubes rotas",
      "icon": "04d",
      "temp": 25,
      "feels_like": 24,
      "temp_min": 23,
      "temp_max": 27,
      "countryName": "Sydney"
    }
  }
] */
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
};

const showModal = ref(false);
const selectedUser = ref(null);

const openModal = (user) => {
  selectedUser.value = user;
  showModal.value = true;
};

onMounted(fetchUsers);
</script>

<template>
  <div class="container mx-auto py-5">
    <h1 class="text-2xl font-bold mb-4 text-center text-amber-700">
      Clima de los Usuarios
    </h1>
    <div v-if="users.length">
      <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
        <UserCard
          v-for="user in users"
          :key="user.id"
          :user="user"
          @openModal="openModal"
        />
        <UserModal
          :user="selectedUser"
          :show="showModal"
          @close="showModal = false"
        />
      </div>
    </div>
    <p v-else>Cargando usuarios...</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>
