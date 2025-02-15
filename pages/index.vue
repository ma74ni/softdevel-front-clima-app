<script setup>
import UserCard from "@/components/UserCard.vue";

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`);
    users.value = await response.json();
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
