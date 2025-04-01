<template>
  <div class="min-h-screen bg-[#0D001A] p-6">
    <div class="max-w-7xl mx-auto">
      <div class="bg-[#1A0033] rounded-xl shadow-lg p-6">
        <h1 class="text-2xl font-bold text-white mb-6">Bestellungen verwalten</h1>
        
        <!-- Order list will be implemented here -->
        <div class="text-gray-400">
          Bestellungsverwaltung wird in Kürze implementiert
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add admin middleware to protect this route
definePageMeta({
  layout: 'admin',
  middleware: ['auth']
})
</script>
