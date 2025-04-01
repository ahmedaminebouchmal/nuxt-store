import { ref } from 'vue'
import type { Ref } from 'vue'

interface User {
  id: string
  email: string
  name: string
  role: 'USER' | 'ADMIN'
}

interface AuthResponse {
  accessToken: string
  user: User
}

interface AuthError {
  message: string
  statusCode: number
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

export interface UseCustomAuthReturn {
  user: Ref<User | null>
  isAuthenticated: Ref<boolean>
  isAdmin: Ref<boolean>
  login: (email: string, password: string) => Promise<LoginResult>
  register: (email: string, password: string, name: string) => Promise<RegisterResult>
  logout: () => void
}

export const useCustomAuth = (): UseCustomAuthReturn => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)
  const isAdmin = ref(false)

  const login = async (email: string, password: string): Promise<LoginResult> => {
    try {
      const response = await $fetch<AuthResponse>('/api/auth/login', {
        method: 'POST',
        body: { email, password }
      })

      // Store the access token
      const authCookie = useCookie('auth_token')
      authCookie.value = response.accessToken

      // Update user state
      user.value = response.user
      isAuthenticated.value = true
      isAdmin.value = response.user.role === 'ADMIN'

      return { success: true }
    } catch (error) {
      const authError = error as AuthError
      console.error('Login error:', authError)
      return {
        success: false,
        error: authError.message || 'Authentication failed'
      }
    }
  }

  const register = async (email: string, password: string, name: string): Promise<RegisterResult> => {
    try {
      const response = await $fetch<User>('/api/auth/register', {
        method: 'POST',
        body: { email, password, name }
      })

      return { success: true, user: response }
    } catch (error) {
      const authError = error as AuthError
      console.error('Registration error:', authError)
      return {
        success: false,
        error: authError.message || 'Registration failed'
      }
    }
  }

  const logout = () => {
    const authCookie = useCookie('auth_token')
    authCookie.value = null
    user.value = null
    isAuthenticated.value = false
    isAdmin.value = false
  }

  return {
    user,
    isAuthenticated,
    isAdmin,
    login,
    register,
    logout
  }
}
