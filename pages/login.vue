<template>
  <div class="min-h-screen bg-[#0D001A] flex items-center justify-center px-4">
    <div class="max-w-md w-full space-y-8 bg-[#1A0033] p-8 rounded-xl shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
          Anmelden
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email" class="sr-only">E-Mail-Adresse</label>
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 bg-[#2D1F3D] text-white placeholder-gray-400 rounded-t-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:z-10 sm:text-sm"
              placeholder="E-Mail-Adresse"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Passwort</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 bg-[#2D1F3D] text-white placeholder-gray-400 rounded-b-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:z-10 sm:text-sm"
              placeholder="Passwort"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                v-if="!loading"
                class="h-5 w-5 text-purple-500 group-hover:text-purple-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            {{ loading ? 'Anmeldung läuft...' : 'Anmelden' }}
          </button>
        </div>

        <div class="text-center">
          <p class="text-sm text-gray-400">
            Noch kein Konto?
            <NuxtLink
              to="/register"
              class="font-medium text-purple-500 hover:text-purple-400"
            >
              Hier registrieren
            </NuxtLink>
          </p>
        </div>
      </form>

      <div v-if="error" class="mt-4 text-center text-sm text-red-500">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['auth']
})

const router = useRouter()
const { $auth } = useNuxtApp()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const result = await $auth.login(email.value, password.value)
    if (result.success) {
      if ($auth.isAdmin.value) {
        router.push('/admin/dashboard')
      } else {
        router.push('/')
      }
    } else {
      error.value = result.error || 'Anmeldung fehlgeschlagen'
    }
  } catch (e) {
    console.error('Login error:', e)
    error.value = 'Ein Fehler ist während der Anmeldung aufgetreten'
  } finally {
    loading.value = false
  }
}
</script>
