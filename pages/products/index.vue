<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold text-purple-300">Unsere Produkte</h1>
      
      <!-- Filter and Sort -->
      <div class="flex space-x-4">
        <select v-model="sortBy" class="bg-[#0D001A] text-purple-300 border border-purple-800 rounded px-4 py-2">
          <option value="newest">Neueste zuerst</option>
          <option value="price-asc">Preis aufsteigend</option>
          <option value="price-desc">Preis absteigend</option>
        </select>
        
        <select v-model="category" class="bg-[#0D001A] text-purple-300 border border-purple-800 rounded px-4 py-2">
          <option value="">Alle Kategorien</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="product in filteredProducts" :key="product.id" 
        class="bg-[#0D001A] rounded-lg border border-purple-800 overflow-hidden hover:border-purple-600 transition-colors">
        <NuxtLink :to="'/products/' + product.id">
          <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold text-purple-300 mb-2">{{ product.name }}</h3>
            <p class="text-purple-400 mb-4 line-clamp-2">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-purple-300">{{ product.price }}€</span>
              <button 
                @click.prevent="addToCart(product)"
                class="bg-purple-700 text-purple-200 px-4 py-2 rounded hover:bg-purple-600 transition-colors"
              >
                In den Warenkorb
              </button>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const sortBy = ref('newest')
const category = ref('')

const categories = [
  'Elektronik',
  'Mode',
  'Haushalt',
  'Sport',
  'Bücher'
]

const products = ref([
  {
    id: 1,
    name: 'Premium Kopfhörer',
    description: 'Drahtlose Kopfhörer mit aktiver Geräuschunterdrückung',
    price: 199.99,
    category: 'Elektronik',
    image: '/images/headphones.jpg'
  },
  {
    id: 2,
    name: 'Fitness-Smartwatch',
    description: 'Wasserdichte Smartwatch mit Herzfrequenzmessung',
    price: 149.99,
    category: 'Elektronik',
    image: '/images/smartwatch.jpg'
  },
  // Add more products here
])

const filteredProducts = computed(() => {
  let result = [...products.value]
  
  if (category.value) {
    result = result.filter(p => p.category === category.value)
  }
  
  switch (sortBy.value) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'newest':
      result.sort((a, b) => b.id - a.id)
      break
  }
  
  return result
})

const addToCart = (product) => {
  // TODO: Implement cart functionality
  console.log('Added to cart:', product)
}
</script>
