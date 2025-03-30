<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-white">Unsere Marken</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div v-for="brand in brands" :key="brand.name" class="bg-[#0D001A] p-6 rounded-lg shadow-lg">
        <h3 class="text-xl font-semibold mb-2 text-white">{{ brand.name }}</h3>
        <p class="text-gray-400">{{ brand.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const brands = [
  {
    name: 'Viessmann',
    description: 'Premium Heizungstechnik'
  },
  {
    name: 'Vaillant',
    description: 'Innovative Wärmepumpen'
  },
  {
    name: 'Bosch',
    description: 'Zuverlässige Heizsysteme'
  },
  {
    name: 'Wolf',
    description: 'Effiziente Energielösungen'
  },
  {
    name: 'Zehnder',
    description: 'Design-Heizkörper'
  },
  {
    name: 'REMKO',
    description: 'Klimatechnik-Experten'
  },
  {
    name: 'Hansgrohe',
    description: 'Hochwertige Sanitärprodukte'
  },
  {
    name: 'Fronius',
    description: 'Solar-Technologie'
  }
]
</script>
