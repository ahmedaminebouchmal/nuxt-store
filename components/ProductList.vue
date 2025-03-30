<template>
  <div>
    <!-- Category Header -->
    <div class="bg-[#0D001A] border-b border-purple-800 mb-8">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-white mb-2">{{ title }}</h1>
        <p class="text-gray-300">{{ description }}</p>
      </div>
    </div>

    <!-- Filters and Sort -->
    <div class="container mx-auto px-4 mb-8">
      <div class="flex flex-col md:flex-row justify-between items-start gap-4">
        <!-- Filters -->
        <div class="w-full md:w-64 bg-[#0D001A] rounded-lg p-4">
          <h2 class="text-lg font-semibold text-white mb-4">Filter</h2>
          <div v-for="filter in filters" :key="filter.name" class="mb-4">
            <h3 class="text-white mb-2">{{ filter.name }}</h3>
            <div class="space-y-2">
              <label v-for="option in filter.options" :key="option.value" class="flex items-center text-gray-300">
                <input type="checkbox" :value="option.value" class="mr-2" />
                {{ option.label }}
              </label>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="flex-1">
          <div class="flex justify-between items-center mb-4">
            <p class="text-gray-300">{{ products.length }} Produkte gefunden</p>
            <select class="bg-[#0D001A] text-white px-4 py-2 rounded-lg border border-purple-800">
              <option>Beliebteste</option>
              <option>Preis aufsteigend</option>
              <option>Preis absteigend</option>
              <option>Neueste</option>
            </select>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="product in products" :key="product.id" class="bg-[#0D001A] rounded-lg overflow-hidden group">
              <div class="relative aspect-square">
                <NuxtImg 
                  :src="`img/${product.image}`" 
                  :alt="product.name" 
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity"/>
              </div>
              <div class="p-4">
                <h3 class="text-white font-semibold mb-2">{{ product.name }}</h3>
                <p class="text-gray-400 text-sm mb-4">{{ product.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-white font-bold">{{ product.price }}€</span>
                  <button class="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                    In den Warenkorb
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    required: true
  },
  filters: {
    type: Array,
    default() {
      return []
    }
  }
})
</script>
