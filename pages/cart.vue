<template>
  <div class="max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold text-purple-300 mb-8">Warenkorb</h1>

    <div v-if="cart.items.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items -->
      <div class="lg:col-span-2 space-y-4">
        <div v-for="item in cart.items" :key="item.id" 
          class="bg-[#0D001A] p-4 rounded-lg border border-purple-800 flex space-x-4">
          <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded">
          
          <div class="flex-grow">
            <h3 class="text-xl font-bold text-purple-300">{{ item.name }}</h3>
            <p class="text-purple-400">{{ item.price }}€</p>
            
            <div class="flex items-center space-x-4 mt-2">
              <button 
                @click="updateQuantity(item, item.quantity - 1)"
                class="px-2 py-1 bg-purple-900 text-purple-300 rounded"
                :disabled="item.quantity <= 1"
              >
                -
              </button>
              <span class="text-purple-300">{{ item.quantity }}</span>
              <button 
                @click="updateQuantity(item, item.quantity + 1)"
                class="px-2 py-1 bg-purple-900 text-purple-300 rounded"
              >
                +
              </button>
              <button 
                @click="removeItem(item)"
                class="text-purple-400 hover:text-purple-200 ml-4"
              >
                Entfernen
              </button>
            </div>
          </div>
          
          <div class="text-right">
            <p class="text-xl font-bold text-purple-300">
              {{ (item.price * item.quantity).toFixed(2) }}€
            </p>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="bg-[#0D001A] p-6 rounded-lg border border-purple-800 h-fit">
        <h2 class="text-2xl font-bold text-purple-300 mb-4">Zusammenfassung</h2>
        
        <div class="space-y-2 text-purple-400">
          <div class="flex justify-between">
            <span>Zwischensumme</span>
            <span>{{ cart.subtotal.toFixed(2) }}€</span>
          </div>
          <div class="flex justify-between">
            <span>Versand</span>
            <span>{{ cart.shipping.toFixed(2) }}€</span>
          </div>
          <div class="flex justify-between">
            <span>MwSt. (19%)</span>
            <span>{{ cart.tax.toFixed(2) }}€</span>
          </div>
          
          <div class="border-t border-purple-800 pt-2 mt-4">
            <div class="flex justify-between text-xl font-bold text-purple-300">
              <span>Gesamtsumme</span>
              <span>{{ cart.total.toFixed(2) }}€</span>
            </div>
          </div>
        </div>

        <button 
          @click="proceedToCheckout"
          class="w-full bg-purple-700 text-purple-200 py-3 px-6 rounded-lg mt-6 hover:bg-purple-600 transition-colors"
        >
          Zur Kasse
        </button>
      </div>
    </div>

    <!-- Empty Cart -->
    <div v-else class="text-center py-12">
      <h2 class="text-2xl font-bold text-purple-300 mb-4">Ihr Warenkorb ist leer</h2>
      <p class="text-purple-400 mb-8">Fügen Sie einige Produkte hinzu und kommen Sie zurück.</p>
      <NuxtLink 
        to="/products" 
        class="inline-block bg-purple-700 text-purple-200 px-8 py-3 rounded-lg hover:bg-purple-600 transition-colors"
      >
        Produkte durchstöbern
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// This would typically be managed by a state management solution like Pinia
const cart = reactive({
  items: [
    {
      id: 1,
      name: 'Premium Kopfhörer',
      price: 199.99,
      quantity: 1,
      image: '/images/headphones.jpg'
    }
  ],
  get subtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  },
  shipping: 4.99,
  get tax() {
    return this.subtotal * 0.19
  },
  get total() {
    return this.subtotal + this.shipping + this.tax
  }
})

const updateQuantity = (item, newQuantity) => {
  if (newQuantity < 1) return
  item.quantity = newQuantity
}

const removeItem = (item) => {
  const index = cart.items.indexOf(item)
  if (index > -1) {
    cart.items.splice(index, 1)
  }
}

const proceedToCheckout = () => {
  // TODO: Implement checkout process
  console.log('Proceeding to checkout')
}
</script>
