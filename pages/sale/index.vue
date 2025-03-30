<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-white">Sale</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="product in saleProducts" :key="product.id" class="bg-[#0D001A] rounded-lg shadow-lg overflow-hidden">
        <div class="relative">
          <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover"/>
          <div class="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded">
            -{{ product.discount }}%
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2 text-white">{{ product.name }}</h3>
          <p class="text-gray-400 mb-2">{{ product.description }}</p>
          <div class="flex items-center justify-between">
            <div>
              <span class="text-gray-400 line-through">{{ product.originalPrice }}€</span>
              <span class="text-white font-bold ml-2">{{ product.salePrice }}€</span>
            </div>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Zum Warenkorb
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const saleProducts = [
  {
    id: 1,
    name: "Viessmann Vitodens 100-W",
    description: "Gas-Brennwertkessel",
    originalPrice: 2999.99,
    discount: 20,
    salePrice: 2399.99,
    image: "/img/Vitodens_200-W.webp"
  },
  {
    id: 2,
    name: "REMKO Klimaanlage",
    description: "Split-Klimagerät",
    originalPrice: 1499.99,
    discount: 15,
    salePrice: 1274.99,
    image: "/img/retro1.webp"
  },
  {
    id: 3,
    name: "SolarEdge Wechselrichter",
    description: "10kW Dreiphasen",
    originalPrice: 2499.99,
    discount: 25,
    salePrice: 1874.99,
    image: "/img/Goodwe.webp"
  }
]
</script>
