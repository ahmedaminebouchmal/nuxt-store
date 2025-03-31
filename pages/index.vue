<template>
  <div class="bg-[#1A0033] min-h-screen">
    <!-- Hero Section -->
    <div class="mt-[104px] lg:mt-[152px]">
      <!-- Brand Showcase Section -->
      <div class="w-full bg-[#0D001A] mb-8 py-12">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-semibold text-white text-center mb-8">Unsere Top-Marken</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            <NuxtImg
              src="/img/Viessmann-Logo.png"
              alt="Viessmann"
              class="h-12 object-contain filter brightness-0 invert hover:brightness-100 transition-all duration-300"
              loading="lazy"
            />
            <NuxtImg
              src="/img/Bosch-logo.png"
              alt="Bosch"
              class="h-12 object-contain filter brightness-0 invert hover:brightness-100 transition-all duration-300"
              loading="lazy"
            />
            <NuxtImg
              src="/img/vaillant_logo.webp"
              alt="Vaillant"
              class="h-12 object-contain filter brightness-0 invert hover:brightness-100 transition-all duration-300"
              loading="lazy"
            />
            <NuxtImg
              src="/img/wolf_logo.png"
              alt="Wolf"
              class="h-12 object-contain filter brightness-0 invert hover:brightness-100 transition-all duration-300"
              loading="lazy"
            />
            <NuxtImg
              src="/img/stiebel_eltron_logo.webp"
              alt="Stiebel Eltron"
              class="h-12 object-contain filter brightness-0 invert hover:brightness-100 transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <!-- Content section -->
      <div class="container mx-auto px-4">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Entdecken Sie Deutschlands<br/>
            größtes Heizkörpersortiment
          </h1>
          <p class="text-gray-300 mb-8">
            Finden Sie die perfekte Heizlösung für Ihr Zuhause
          </p>
          <NuxtLink
            to="/heizung"
            class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center"
          >
            Jetzt entdecken
            <i class="fas fa-arrow-right ml-2"></i>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <div class="bg-[#0D001A] py-16 mt-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-white mb-12 text-center">Unsere Kategorien</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Heizung -->
          <ProductCard
            to="/heizung"
            image="/img/Fussbodenheizung_Oberdämmung.jpg"
            title="Heizung"
            description="Moderne Heizsysteme für maximalen Komfort"
          />

          <!-- Klima -->
          <ProductCard
            to="/klima"
            image="/img/REMKO-262310.jpg"
            title="Klima"
            description="Perfektes Raumklima zu jeder Jahreszeit"
          />

          <!-- Installation -->
          <ProductCard
            to="/installation"
            image="/img/Pumpen_category.jpg"
            title="Installation"
            description="Professionelles Installationszubehör"
          />

          <!-- Photovoltaik -->
          <ProductCard
            to="/photovoltaik"
            image="/img/Fronius-GEN24-Primo-Product.jpg"
            title="Photovoltaik"
            description="Nachhaltige Energielösungen"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '~/components/ProductCard.vue'
</script>
