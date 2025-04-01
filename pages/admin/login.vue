<template>
  <div class="min-h-screen bg-[#0D001A]">
    <div class="container mx-auto px-4 py-8">
      <div class="bg-[#1A0033] rounded-xl shadow-lg p-6 max-w-md mx-auto">
        <h1 class="text-2xl font-bold text-white mb-6">Admin Login</h1>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-white mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              class="w-full px-3 py-2 bg-[#2D1F3D] text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label class="block text-white mb-2">Password</label>
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full px-3 py-2 bg-[#2D1F3D] text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div v-if="error" class="text-red-500">{{ error }}</div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
          >
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, navigateTo, useCookie } from '#app'

interface LoginResponse {
  success: boolean;
  token?: string;
  admin?: {
    id: string;
    email: string;
    name: string;
  };
  message?: string;
}

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')
const adminToken = useCookie('admin_token')

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const response = await $fetch<LoginResponse>('/api/auth/admin/login', {
      method: 'POST',
      credentials: 'include',
      body: {
        email: email.value,
        password: password.value
      }
    })

    if (response.success && response.token) {
      // Manually set the cookie
      adminToken.value = response.token
      
      // Navigate to dashboard
      await navigateTo('/admin/dashboard')
    } else {
      error.value = response.message || 'Invalid credentials'
    }
  } catch (e: any) {
    console.error('Login error:', e)
    error.value = e?.data?.message || 'An error occurred during login'
  } finally {
    loading.value = false
  }
}

// Redirect if already logged in
onMounted(() => {
  if (adminToken.value) {
    navigateTo('/admin/dashboard')
  }
})

definePageMeta({
  layout: false,
  middleware: ['auth']
})
</script>
