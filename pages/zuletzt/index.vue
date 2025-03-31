<template>
  <div class="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 pb-12">
    <h1 class="text-4xl font-bold text-gray-100 mb-8">Zuletzt angesehen</h1>

    <!-- Produktgrid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <!-- Produkt 1 -->
      <div class="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden group">
        <div class="relative aspect-square">
          <img :src="`/img/Bosch Olio Conderns 8000i FM gallery 1.jpg`" alt="Bosch Olio Condens 8000i" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        <div class="p-4">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-100">Bosch Olio Condens 8000i</h3>
              <p class="text-gray-400 text-sm mt-1">Öl-Brennwertheizung</p>
            </div>
            <div class="text-right">
              <p class="text-lg font-bold text-gray-100">2.499,00 €</p>
              <p class="text-sm text-gray-400">inkl. MwSt</p>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between gap-4">
            <button class="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Zum Produkt
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-300 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          <div class="mt-4 text-sm text-gray-400">
            Angesehen: Heute, 14:30 Uhr
          </div>
        </div>
      </div>

      <!-- Produkt 2 -->
      <div class="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden group">
        <div class="relative aspect-square">
          <img :src="`/img/HUAWEI-SUN2000-KTL-M5.jpg`" alt="HUAWEI SUN2000" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        <div class="p-4">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-100">HUAWEI SUN2000</h3>
              <p class="text-gray-400 text-sm mt-1">Solar-Wechselrichter</p>
            </div>
            <div class="text-right">
              <p class="text-lg font-bold text-gray-100">999,00 €</p>
              <p class="text-sm text-gray-400">inkl. MwSt</p>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between gap-4">
            <button class="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Zum Produkt
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-300 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          <div class="mt-4 text-sm text-gray-400">
            Angesehen: Heute, 13:15 Uhr
          </div>
        </div>
      </div>

      <!-- Produkt 3 -->
      <div class="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden group">
        <div class="relative aspect-square">
          <img :src="`/img/Kermi_W20447.jpg`" alt="Kermi Heizkörper" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        <div class="p-4">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-100">Kermi Heizkörper</h3>
              <p class="text-gray-400 text-sm mt-1">Flachheizkörper</p>
            </div>
            <div class="text-right">
              <p class="text-lg font-bold text-gray-100">399,00 €</p>
              <p class="text-sm text-gray-400">inkl. MwSt</p>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between gap-4">
            <button class="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Zum Produkt
            </button>
            <button class="p-2 text-gray-400 hover:text-gray-300 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          <div class="mt-4 text-sm text-gray-400">
            Angesehen: Gestern, 18:45 Uhr
          </div>
        </div>
      </div>

      <!-- Keine Produkte -->
      <div v-if="false" class="col-span-full bg-gray-900 rounded-lg p-8 border border-gray-700 text-center">
        <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-100 mb-2">Keine kürzlich angesehenen Produkte</h3>
        <p class="text-gray-400 mb-6">Stöbern Sie in unserem Shop und entdecken Sie unsere Produkte.</p>
        <a href="/products" class="inline-block px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          Produkte entdecken
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No imports needed, using direct image paths
</script>
