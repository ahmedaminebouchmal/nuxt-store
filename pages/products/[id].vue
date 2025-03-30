<template>
  <div v-if="product" class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Images -->
      <div class="space-y-4">
        <div class="bg-[#0D001A] rounded-lg border border-purple-800 overflow-hidden">
          <img :src="product.image" :alt="product.name" class="w-full h-96 object-cover">
        </div>
        <div class="grid grid-cols-4 gap-4">
          <div v-for="(img, index) in product.gallery" :key="index"
            class="bg-[#0D001A] rounded-lg border border-purple-800 overflow-hidden cursor-pointer">
            <img :src="img" :alt="product.name" class="w-full h-24 object-cover">
          </div>
        </div>
      </div>

      <!-- Product Info -->
      <div class="space-y-6">
        <h1 class="text-4xl font-bold text-purple-300">{{ product.name }}</h1>
        <p class="text-2xl font-bold text-purple-300">{{ product.price }}€</p>
        
        <div class="bg-[#0D001A] p-6 rounded-lg border border-purple-800">
          <p class="text-purple-400">{{ product.description }}</p>
        </div>

        <!-- Quantity Selector -->
        <div class="flex items-center space-x-4">
          <label class="text-purple-300">Menge:</label>
          <div class="flex items-center">
            <button 
              @click="quantity > 1 && quantity--"
              class="px-3 py-1 bg-[#0D001A] text-purple-300 border border-purple-800 rounded-l hover:bg-purple-900"
            >
              -
            </button>
            <input 
              type="number" 
              v-model="quantity" 
              min="1" 
              class="w-16 px-3 py-1 bg-[#0D001A] text-purple-300 border-t border-b border-purple-800 text-center"
            >
            <button 
              @click="quantity++"
              class="px-3 py-1 bg-[#0D001A] text-purple-300 border border-purple-800 rounded-r hover:bg-purple-900"
            >
              +
            </button>
          </div>
        </div>

        <!-- Add to Cart Button -->
        <button 
          @click="addToCart"
          class="w-full bg-purple-700 text-purple-200 py-3 px-6 rounded-lg hover:bg-purple-600 transition-colors"
        >
          In den Warenkorb
        </button>

        <!-- Product Details -->
        <div class="bg-[#0D001A] p-6 rounded-lg border border-purple-800 space-y-4">
          <h2 class="text-xl font-bold text-purple-300">Produktdetails</h2>
          <ul class="space-y-2 text-purple-400">
            <li v-for="(detail, index) in product.details" :key="index">
              <strong class="text-purple-300">{{ detail.label }}:</strong> {{ detail.value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const quantity = ref(1)

// This would typically come from an API
const product = ref({
  id: route.params.id,
  name: 'Premium Kopfhörer',
  price: 199.99,
  description: 'Unsere Premium Kopfhörer bieten ein unvergleichliches Klangerlebnis mit aktiver Geräuschunterdrückung und bis zu 30 Stunden Akkulaufzeit.',
  image: '/images/headphones.jpg',
  gallery: [
    '/images/headphones-1.jpg',
    '/images/headphones-2.jpg',
    '/images/headphones-3.jpg',
    '/images/headphones-4.jpg'
  ],
  details: [
    { label: 'Marke', value: 'Raleo Audio' },
    { label: 'Modell', value: 'RA-2000' },
    { label: 'Akkulaufzeit', value: 'Bis zu 30 Stunden' },
    { label: 'Bluetooth', value: '5.0' },
    { label: 'Gewicht', value: '250g' },
    { label: 'Garantie', value: '2 Jahre' }
  ]
})

const addToCart = () => {
  // TODO: Implement cart functionality
  console.log('Added to cart:', {
    product: product.value,
    quantity: quantity.value
  })
}
</script>
