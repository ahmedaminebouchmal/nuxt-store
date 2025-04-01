import { defineNuxtRouteMiddleware, navigateTo, useCookie } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  const adminToken = useCookie('admin_token')
  const isAdminRoute = to.path.startsWith('/admin')
  const isLoginPage = to.path === '/admin/login'

  console.log('Auth middleware - Route:', to.path)
  console.log('Token exists:', !!adminToken.value)

  // If we're on the login page and have a token, go to dashboard
  if (isLoginPage && adminToken.value) {
    console.log('Redirecting to dashboard - already logged in')
    return navigateTo('/admin/dashboard')
  }

  // If we're on an admin route (except login) and don't have a token, go to login
  if (isAdminRoute && !isLoginPage && !adminToken.value) {
    console.log('Redirecting to login - no token')
    return navigateTo('/admin/login')
  }
})
