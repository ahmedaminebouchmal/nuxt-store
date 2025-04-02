<template>
  <div class="min-h-screen bg-[#0D001A] flex items-center justify-center px-4">
    <div class="max-w-md w-full space-y-8 bg-[#1A0033] p-8 rounded-xl shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
          Anmelden
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div v-if="error" class="bg-red-900/50 text-red-200 p-3 rounded-md text-sm mb-4">
          {{ error }}
        </div>

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
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
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

        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-600"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-[#1A0033] text-gray-400">Oder anmelden mit</span>
          </div>
        </div>

        <div>
          <button
            type="button"
            @click="handleGoogleLogin"
            :disabled="loading"
            class="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#4285F4] hover:bg-[#357ABD] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
              />
            </svg>
            <span>Mit Google anmelden</span>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface GoogleResponse {
  access_token: string
}

declare global {
  interface Window {
    google: {
      accounts: {
        oauth2: {
          initTokenClient(config: {
            client_id: string
            scope: string
            callback: (response: GoogleResponse) => void
          }): {
            requestAccessToken(): void
          }
        }
      }
    }
  }
}

definePageMeta({
  middleware: ['user-auth']
})

const router = useRouter()
const config = useRuntimeConfig()
const { login, loginWithGoogle } = useCustomAuth()

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const result = await login(email.value, password.value)
    if (result.success) {
      router.push('/profil')
    } else {
      error.value = result.error || 'Anmeldung fehlgeschlagen'
    }
  } catch (e: any) {
    console.error('Login error:', e)
    error.value = e?.message || 'Ein Fehler ist aufgetreten'
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = async () => {
  if (!window.google) {
    error.value = 'Google OAuth ist nicht verfügbar'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const result = await loginWithGoogle()
    if (result.success) {
      router.push('/profil')
    } else {
      error.value = result.error || 'Google-Anmeldung fehlgeschlagen'
    }
  } catch (e: any) {
    console.error('Google login error:', e)
    error.value = e?.message || 'Ein Fehler ist aufgetreten'
  } finally {
    loading.value = false
  }
}
</script>
