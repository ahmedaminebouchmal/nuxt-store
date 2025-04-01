import { defineNuxtPlugin } from '#app'
import type { UseCustomAuthReturn } from '~/composables/useAuth'
import { useCustomAuth } from '~/composables/useAuth'

declare module '#app' {
  interface NuxtApp {
    $auth: UseCustomAuthReturn
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const auth = useCustomAuth()

  return {
    provide: {
      auth
    }
  }
})
