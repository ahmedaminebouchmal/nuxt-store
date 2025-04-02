import { defineNuxtRouteMiddleware, navigateTo, useCookie } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  const userToken = useCookie('user_token')
  const isLoginPage = to.path === '/login'
  const isRegisterPage = to.path === '/register'
  const isProtectedRoute = ['/profil', '/bestellungen', '/wunschliste', '/warenkorb'].some(route => 
    to.path.startsWith(route)
  )

  console.log('User Auth middleware - Route:', to.path)
  console.log('Token exists:', !!userToken.value)

  // If we're on login/register and have a token, go to profile
  if ((isLoginPage || isRegisterPage) && userToken.value) {
    console.log('Redirecting to profile - already logged in')
    return navigateTo('/profil')
  }

  // If we're on a protected route and don't have a token, go to login
  if (isProtectedRoute && !userToken.value) {
    console.log('Redirecting to login - no token')
    return navigateTo('/login')
  }
})
