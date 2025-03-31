<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-white">Sale</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="product in saleProducts" :key="product.id" class="bg-[#0D001A] rounded-lg shadow-lg overflow-hidden">
        <div class="relative">
          <NuxtImg src="/img/Viessmann Vitodens 200-W 60 B2HAI36 Vitodens 200-W B2HAI35.webp" alt="Viessmann Vitodens 200-W" class="w-full h-48 object-cover" v-if="product.id === 1"/>
          <NuxtImg src="/img/REMKO-262310.jpg" alt="REMKO Klimaanlage" class="w-full h-48 object-cover" v-if="product.id === 2"/>
          <NuxtImg src="/img/Bosch Olio Conderns 8000i FM gallery 1.jpg" alt="Bosch Olio Condens 8000i" class="w-full h-48 object-cover" v-if="product.id === 3"/>
          <NuxtImg src="/img/HUAWEI-SUN2000-KTL-M5.jpg" alt="HUAWEI SUN2000" class="w-full h-48 object-cover" v-if="product.id === 4"/>
          <NuxtImg src="/img/Kermi_W20447.jpg" alt="Kermi Heizkörper" class="w-full h-48 object-cover" v-if="product.id === 5"/>
          <NuxtImg src="/img/Viessmann-Vitoligno-300-C-Holzkessel-12-18-kw-gallery1.jpg" alt="Vaillant Wärmepumpe" class="w-full h-48 object-cover" v-if="product.id === 6"/>
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
    name: "Viessmann Vitodens 200-W",
    description: "Hocheffizienter Gas-Brennwertkessel",
    originalPrice: 3499.99,
    discount: 20,
    salePrice: 2799.99
  },
  {
    id: 2,
    name: "REMKO Klimaanlage",
    description: "Energieeffiziente Split-Klimaanlage",
    originalPrice: 1899.99,
    discount: 15,
    salePrice: 1614.99
  },
  {
    id: 3,
    name: "Bosch Olio Condens 8000i",
    description: "Premium Öl-Brennwertheizung",
    originalPrice: 2999.99,
    discount: 25,
    salePrice: 2249.99
  },
  {
    id: 4,
    name: "HUAWEI SUN2000",
    description: "Leistungsstarker Solar-Wechselrichter",
    originalPrice: 1799.99,
    discount: 20,
    salePrice: 1439.99
  },
  {
    id: 5,
    name: "Kermi Heizkörper",
    description: "Moderner Design-Heizkörper",
    originalPrice: 599.99,
    discount: 30,
    salePrice: 419.99
  },
  {
    id: 6,
    name: "Vaillant Wärmepumpe",
    description: "Luft-Wasser-Wärmepumpe",
    originalPrice: 4999.99,
    discount: 15,
    salePrice: 4249.99
  }
]
</script>
