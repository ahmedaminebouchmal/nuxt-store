<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-white mb-8">Mein Profil</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-[#1A0033] rounded-lg p-6">
        <h2 class="text-xl font-bold text-white mb-4">Persönliche Daten</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-gray-400 mb-1">Name</label>
            <input 
              :value="name" 
              @input="updateName"
              type="text" 
              class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">E-Mail</label>
            <input 
              :value="email" 
              type="email" 
              class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
              readonly 
            />
          </div>
        </div>
      </div>
      <div class="bg-[#1A0033] rounded-lg p-6">
        <h2 class="text-xl font-bold text-white mb-4">Passwort ändern</h2>
        <form @submit.prevent="changePassword" class="space-y-4">
          <div>
            <label class="block text-sm text-gray-400 mb-1">Aktuelles Passwort</label>
            <input 
              v-model="currentPassword"
              type="password" 
              class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">Neues Passwort</label>
            <input 
              v-model="newPassword"
              type="password" 
              class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <button 
            type="submit"
            class="w-full bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Passwort ändern
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
definePageMeta({
  middleware: ['user-auth']
})

const { user } = useCustomAuth()
const name = ref('')
const email = ref('')
const currentPassword = ref('')
const newPassword = ref('')

// Initialize user data
onMounted(() => {
  if (user.value) {
    name.value = user.value.name || ''
    email.value = user.value.email
  }
})

const updateName = async (event: Event) => {
  const target = event.target as HTMLInputElement
  name.value = target.value
  // TODO: Update name in backend
}

const changePassword = async () => {
  // TODO: Implement password change
  console.log('Change password:', { currentPassword: currentPassword.value, newPassword: newPassword.value })
}
</script>
