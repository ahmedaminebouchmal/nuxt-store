import { ref } from 'vue'
import type { Ref } from 'vue'

interface User {
  id: string
  email: string
  name: string
  role: 'USER' | 'ADMIN'
}

interface AuthResponse {
  success: boolean
  user: User
  error?: string
}

interface LoginResult {
  success: boolean
  error?: string
}

interface RegisterResult {
  success: boolean
  user?: User
  error?: string
}

interface GoogleUser {
  email: string
  name: string
  sub: string
}

export interface UseCustomAuthReturn {
  user: Ref<User | null>
  isAuthenticated: Ref<boolean>
  login: (email: string, password: string) => Promise<LoginResult>
  loginWithGoogle: () => Promise<LoginResult>
  register: (email: string, password: string, name: string) => Promise<RegisterResult>
  logout: () => Promise<void>
}

export const useCustomAuth = (): UseCustomAuthReturn => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)
  const config = useRuntimeConfig()

  const login = async (email: string, password: string): Promise<LoginResult> => {
    try {
      const { data, error } = await useFetch<AuthResponse>('/api/auth/login', {
        method: 'POST',
        body: { email, password }
      })

      if (!error.value && data.value?.success) {
        user.value = data.value.user
        isAuthenticated.value = true
        return { success: true }
      }

      return {
        success: false,
        error: error.value?.data?.message || 'Anmeldung fehlgeschlagen'
      }
    } catch (error: any) {
      console.error('Login error:', error)
      return {
        success: false,
        error: error.message || 'Ein Fehler ist aufgetreten'
      }
    }
  }

  const loginWithGoogle = async (): Promise<LoginResult> => {
    return new Promise((resolve) => {
      try {
        // Open Google OAuth popup
        const width = 500
        const height = 600
        const left = window.screenX + (window.outerWidth - width) / 2
        const top = window.screenY + (window.outerHeight - height) / 2

        const popup = window.open(
          `https://accounts.google.com/o/oauth2/v2/auth?` +
          `client_id=${config.public.googleClientId}&` +
          `redirect_uri=${window.location.origin}/api/auth/google/callback&` +
          `response_type=token&` +
          `scope=email profile`,
          'Google Login',
          `width=${width},height=${height},left=${left},top=${top}`
        )

        // Listen for the token from the popup
        const messageHandler = async (event: MessageEvent) => {
          if (event.origin !== window.location.origin) return
          if (!event.data.token) return

          window.removeEventListener('message', messageHandler)
          if (popup) popup.close()

          try {
            // Get user info from Google
            const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: { Authorization: `Bearer ${event.data.token}` }
            })
            
            if (!response.ok) {
              throw new Error('Fehler beim Abrufen der Google-Benutzerdaten')
            }

            const googleUser: GoogleUser = await response.json()

            // Register/login with our backend
            const { data, error } = await useFetch<AuthResponse>('/api/auth/register', {
              method: 'POST',
              body: {
                email: googleUser.email,
                name: googleUser.name,
                googleToken: event.data.token
              }
            })

            if (!error.value && data.value?.success) {
              user.value = data.value.user
              isAuthenticated.value = true
              resolve({ success: true })
            } else {
              resolve({
                success: false,
                error: error.value?.data?.message || 'Google-Anmeldung fehlgeschlagen'
              })
            }
          } catch (error: any) {
            console.error('Google login error:', error)
            resolve({
              success: false,
              error: error.message || 'Ein Fehler ist aufgetreten'
            })
          }
        }

        window.addEventListener('message', messageHandler)
      } catch (error: any) {
        console.error('Google OAuth error:', error)
        resolve({
          success: false,
          error: error.message || 'Ein Fehler ist aufgetreten'
        })
      }
    })
  }

  const register = async (email: string, password: string, name: string): Promise<RegisterResult> => {
    try {
      const { data, error } = await useFetch<AuthResponse>('/api/auth/register', {
        method: 'POST',
        body: { email, password, name }
      })

      if (!error.value && data.value?.success) {
        return {
          success: true,
          user: data.value.user
        }
      }

      return {
        success: false,
        error: error.value?.data?.message || 'Registrierung fehlgeschlagen'
      }
    } catch (error: any) {
      console.error('Registration error:', error)
      return {
        success: false,
        error: error.message || 'Ein Fehler ist aufgetreten'
      }
    }
  }

  const logout = async (): Promise<void> => {
    try {
      await useFetch('/api/auth/logout', {
        method: 'POST'
      })
      user.value = null
      isAuthenticated.value = false
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    loginWithGoogle,
    register,
    logout
  }
}
