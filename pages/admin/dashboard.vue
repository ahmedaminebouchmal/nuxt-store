<template>
  <div class="space-y-6">
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Stats Card -->
      <div class="bg-[#1A0033] rounded-xl shadow-lg p-6">
        <h2 class="text-xl font-semibold text-white mb-4">Statistiken</h2>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-gray-300">Produkte Gesamt</span>
            <span class="text-white font-medium">{{ stats.products }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-300">Bestellungen Gesamt</span>
            <span class="text-white font-medium">{{ stats.orders }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-300">Benutzer Gesamt</span>
            <span class="text-white font-medium">{{ stats.users }}</span>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-[#1A0033] rounded-xl shadow-lg p-6">
        <h2 class="text-xl font-semibold text-white mb-4">Schnellzugriff</h2>
        <div class="space-y-3">
          <button 
            @click="() => navigateTo('/admin/products')"
            class="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition flex items-center justify-center space-x-2"
          >
            <span>Produkte verwalten</span>
          </button>
          <button 
            @click="() => navigateTo('/admin/orders')"
            class="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition flex items-center justify-center space-x-2"
          >
            <span>Bestellungen ansehen</span>
          </button>
          <button 
            @click="() => navigateTo('/admin/users')"
            class="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition flex items-center justify-center space-x-2"
          >
            <span>Benutzer verwalten</span>
          </button>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-[#1A0033] rounded-xl shadow-lg p-6">
        <h2 class="text-xl font-semibold text-white mb-4">Letzte Aktivitäten</h2>
        <div class="space-y-3">
          <div v-for="activity in recentActivity" :key="activity.id" class="bg-[#2D1F3D] p-3 rounded">
            <p class="text-sm text-gray-300">{{ activity.message }}</p>
            <span class="text-xs text-gray-400">{{ activity.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from '#app'

// Mock data - replace with real data later
const stats = ref({
  products: 25,
  orders: 150,
  users: 1200
})

const recentActivity = ref([
  {
    id: 1,
    message: 'Neue Bestellung #1234 eingegangen',
    time: 'vor 5 Minuten'
  },
  {
    id: 2,
    message: 'Produkt "Gaming Maus" aktualisiert',
    time: 'vor 15 Minuten'
  },
  {
    id: 3,
    message: 'Neuer Benutzer registriert',
    time: 'vor 1 Stunde'
  }
])

definePageMeta({
  middleware: ['auth'],
  layout: 'admin'
})
</script>
