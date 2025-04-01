<template>
  <div class="min-h-screen bg-[#0D001A]">
    <!-- Top Navigation -->
    <nav class="bg-[#1A0033] shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Left side nav items -->
          <div class="flex items-center space-x-8">
            <NuxtLink 
              to="/admin/dashboard" 
              class="text-white hover:text-purple-400 transition"
              :class="{ 'text-purple-400': route.path === '/admin/dashboard' }"
            >
              Dashboard
            </NuxtLink>
            <NuxtLink 
              to="/admin/products" 
              class="text-white hover:text-purple-400 transition"
              :class="{ 'text-purple-400': route.path === '/admin/products' }"
            >
              Produkte
            </NuxtLink>
            <NuxtLink 
              to="/admin/orders" 
              class="text-white hover:text-purple-400 transition"
              :class="{ 'text-purple-400': route.path === '/admin/orders' }"
            >
              Bestellungen
            </NuxtLink>
            <NuxtLink 
              to="/admin/customers" 
              class="text-white hover:text-purple-400 transition"
              :class="{ 'text-purple-400': route.path === '/admin/customers' }"
            >
              Kunden
            </NuxtLink>
          </div>

          <!-- Right side logout button -->
          <button 
            @click="handleLogout" 
            class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Abmelden
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRoute, navigateTo } from '#app'
import { useCookie } from '#imports'

const route = useRoute()

const handleLogout = async () => {
  try {
    await $fetch('/api/auth/admin/logout', {
      method: 'POST'
    })

    const adminToken = useCookie('admin_token')
    adminToken.value = null
    
    await navigateTo('/admin/login')
  } catch (error) {
    await navigateTo('/admin/login')
  }
}
</script>
