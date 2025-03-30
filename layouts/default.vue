<template>
  <div class="min-h-screen bg-[#1A0033]">
    <!-- Main Header with Trust Elements and Navigation -->
    <header 
      class="bg-[#0D001A] shadow-lg fixed w-full z-50 transition-all duration-300"
      :class="[
        'top-0',
        {'translate-y-[-100%]': isScrolled && !isScrollingUp}
      ]"
    >
      <!-- Trust Elements (desktop only) -->
      <div 
        class="hidden lg:block border-b border-purple-800 transition-all duration-300 overflow-hidden"
        :class="{'h-0 opacity-0 border-none': isScrolled}"
      >
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-10">
            <div class="flex items-center space-x-2">
              <Icon name="headset" class="text-blue-500" />
              <span class="text-white text-sm">Premium Kundenservice</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="calendar" class="text-blue-500" />
              <span class="text-white text-sm">30 Tage Rückgaberecht</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="check-circle" class="text-blue-500" />
              <span class="text-white text-sm">Unübertroffene Verfügbarkeit</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="truck" class="text-blue-500" />
              <span class="text-white text-sm">Transparente Liefertermine</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="shield-halved" class="text-blue-500" />
              <span class="text-white text-sm">Sichere Zahlung</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="star" class="text-blue-500" />
              <span class="text-white text-sm">Zufriedenheitsgarantie</span>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto">
        <!-- Main Navigation Bar -->
        <div class="flex items-center justify-between px-4 h-16">
          <div class="flex items-center space-x-4">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen" 
              class="text-white p-2 flex flex-col justify-center items-center w-8 h-8 lg:hidden"
            >
              <span class="w-6 h-0.5 bg-white mb-1.5"></span>
              <span class="w-6 h-0.5 bg-white mb-1.5"></span>
              <span class="w-6 h-0.5 bg-white"></span>
            </button>
            <NuxtLink to="/" class="text-2xl font-bold text-white">
              RALEO
            </NuxtLink>
          </div>

          <!-- Search Bar -->
          <div class="flex-1 max-w-2xl mx-8 hidden lg:block">
            <div class="relative">
              <input
                type="text"
                placeholder="Suchen..."
                class="w-full bg-[#2D1F3D] text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Icon 
                name="search"
                size="sm"
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <!-- Account & Cart -->
          <div class="flex items-center space-x-4">
            <div class="relative w-[200px] lg:hidden">
              <input
                type="text"
                placeholder="Suchen..."
                class="w-full bg-[#2D1F3D] text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Icon 
                name="search"
                size="sm"
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <NuxtLink to="/konto" class="text-white hover:text-purple-400">
              <Icon name="user" size="xl" />
            </NuxtLink>
            <NuxtLink to="/warenkorb" class="relative text-white hover:text-purple-400">
              <Icon name="shopping-cart" size="xl" />
              <span class="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop Categories Navigation -->
        <nav class="hidden lg:block border-t border-purple-800">
          <div class="container mx-auto px-4">
            <div class="flex space-x-8 h-12">
              <NuxtLink 
                v-for="item in navigation" 
                :key="item.name"
                :to="item.href"
                class="text-white hover:text-purple-400 h-full flex items-center font-medium"
                :class="{'text-red-400 hover:text-red-300': item.name === 'SALE'}"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="mobileMenuOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
      @click="mobileMenuOpen = false"
    ></div>

    <!-- Mobile Menu -->
    <div 
      class="fixed inset-y-0 left-0 w-64 bg-[#0D001A] transform transition-transform duration-300 ease-in-out z-50 lg:hidden border-r border-purple-800"
      :class="mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
      @click.stop
    >
      <div class="h-full overflow-y-auto">
        <!-- Search Bar -->
        <div class="p-4 border-b border-purple-800">
          <div class="relative">
            <input
              type="text"
              placeholder="Suchen..."
              class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Icon 
              name="search"
              size="sm"
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        <!-- Categories -->
        <div class="py-2">
          <h2 class="px-4 py-2 text-sm font-semibold text-purple-400">Kategorien:</h2>
          <nav>
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.name"
              :to="item.href"
              class="flex items-center justify-between px-4 py-3 text-white hover:bg-purple-900 group"
              :class="{'text-red-400 hover:text-red-300': item.name === 'SALE'}"
              @click="mobileMenuOpen = false"
            >
              <span>{{ item.name }}</span>
              <div class="flex items-center space-x-2 text-purple-400 group-hover:text-white">
                <span v-if="item.subcategories" class="text-sm">
                  {{ item.subcategories }} Unterkategorien
                </span>
                <Icon name="chevron-right" size="sm" />
              </div>
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="pt-[148px] pb-[220px] lg:pt-32 lg:pb-0">
      <slot />
    </main>

    <!-- Trust Elements Above Footer -->
    <div class="bg-[#0D001A] py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex items-center justify-center md:justify-start space-x-4">
            <Icon name="shield-halved" class="text-blue-500 text-2xl" />
            <div>
              <h3 class="text-white font-medium">Sichere Zahlung</h3>
              <p class="text-gray-400 text-sm">Alle gängigen Zahlungsarten</p>
            </div>
          </div>
          <div class="flex items-center justify-center md:justify-start space-x-4">
            <Icon name="users" class="text-blue-500 text-2xl" />
            <div>
              <h3 class="text-white font-medium">Vertrauenswürdig</h3>
              <p class="text-gray-400 text-sm">Über 10000 zufriedene Kunden</p>
            </div>
          </div>
          <div class="flex items-center justify-center md:justify-start space-x-4">
            <Icon name="truck" class="text-blue-500 text-2xl" />
            <div>
              <h3 class="text-white font-medium">Schneller Versand</h3>
              <p class="text-gray-400 text-sm">Lieferung in 1-3 Werktagen</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-[#0D001A] border-t border-purple-800 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <!-- Information -->
          <div class="col-span-1 lg:col-span-1">
            <h3 class="text-white font-semibold mb-4">Informationen</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/about" class="text-gray-400 hover:text-white">Über uns</NuxtLink></li>
              <li><NuxtLink to="/agb" class="text-gray-400 hover:text-white">AGB</NuxtLink></li>
              <li><NuxtLink to="/datenschutz" class="text-gray-400 hover:text-white">Datenschutz</NuxtLink></li>
              <li><NuxtLink to="/impressum" class="text-gray-400 hover:text-white">Impressum</NuxtLink></li>
            </ul>
          </div>

          <!-- Customer Service -->
          <div class="col-span-1 lg:col-span-1">
            <h3 class="text-white font-semibold mb-4">Kundenservice</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/faq" class="text-gray-400 hover:text-white">FAQ</NuxtLink></li>
              <li><NuxtLink to="/zahlungsarten" class="text-gray-400 hover:text-white">Zahlungsarten</NuxtLink></li>
              <li><NuxtLink to="/widerrufsbelehrung" class="text-gray-400 hover:text-white">Widerrufsbelehrung</NuxtLink></li>
              <li><NuxtLink to="/versanddetails" class="text-gray-400 hover:text-white">Versanddetails</NuxtLink></li>
            </ul>
          </div>

          <!-- Account -->
          <div class="col-span-1 lg:col-span-1">
            <h3 class="text-white font-semibold mb-4">Konto</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/profil" class="text-gray-400 hover:text-white">Profil</NuxtLink></li>
              <li><NuxtLink to="/bestellungen" class="text-gray-400 hover:text-white">Meine Bestellungen</NuxtLink></li>
              <li><NuxtLink to="/zuletzt" class="text-gray-400 hover:text-white">Zuletzt angesehen</NuxtLink></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="col-span-1 lg:col-span-1">
            <h3 class="text-white font-semibold mb-4">Kontakt</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/kontakt" class="text-gray-400 hover:text-white">Kontakt</NuxtLink></li>
              <li><NuxtLink to="/haendler" class="text-gray-400 hover:text-white">Kontaktformular für Händler</NuxtLink></li>
            </ul>
          </div>

          <!-- Payment & Shipping -->
          <div class="col-span-2 lg:col-span-2">
            <h3 class="text-white font-semibold mb-4">Versand</h3>
            <div class="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2">
              <img src="/img/Deutschland (1).png" alt="Deutschland" class="h-6 w-auto"/>
              <img src="/img/Österreich.png" alt="Österreich" class="h-6 w-auto"/>
              <img src="/img/Schweiz (1).png" alt="Schweiz" class="h-6 w-auto"/>
              <img src="/img/Italien (1).png" alt="Italien" class="h-6 w-auto"/>
              <img src="/img/Dänemark.png" alt="Dänemark" class="h-6 w-auto"/>
              <img src="/img/Frankreich (1).png" alt="Frankreich" class="h-6 w-auto"/>
              <img src="/img/Polen (1).png" alt="Polen" class="h-6 w-auto"/>
              <img src="/img/Portugal (1).png" alt="Portugal" class="h-6 w-auto"/>
              <img src="/img/Rumänien.png" alt="Rumänien" class="h-6 w-auto"/>
              <img src="/img/Schweden (1).png" alt="Schweden" class="h-6 w-auto"/>
              <img src="/img/Slowakei.png" alt="Slowakei" class="h-6 w-auto"/>
              <img src="/img/Slowenien.png" alt="Slowenien" class="h-6 w-auto"/>
              <img src="/img/Spanien.png" alt="Spanien" class="h-6 w-auto"/>
              <img src="/img/Belgium (1).png" alt="Belgien" class="h-6 w-auto"/>
              <img src="/img/Bulgarien (1).png" alt="Bulgarien" class="h-6 w-auto"/>
              <img src="/img/Estland (1).png" alt="Estland" class="h-6 w-auto"/>
              <img src="/img/Finnland (1).png" alt="Finnland" class="h-6 w-auto"/>
              <img src="/img/Griechenland (1).png" alt="Griechenland" class="h-6 w-auto"/>
              <img src="/img/Irland (1).png" alt="Irland" class="h-6 w-auto"/>
              <img src="/img/Kroatien (1).png" alt="Kroatien" class="h-6 w-auto"/>
              <img src="/img/Lettland (1).png" alt="Lettland" class="h-6 w-auto"/>
              <img src="/img/Litauen (1).png" alt="Litauen" class="h-6 w-auto"/>
              <img src="/img/Luxemburg (1).png" alt="Luxemburg" class="h-6 w-auto"/>
              <img src="/img/Niederlande (1).png" alt="Niederlande" class="h-6 w-auto"/>
            </div>
          </div>
        </div>

        <!-- Social Media & Copyright -->
        <div class="mt-12 pt-8 border-t border-purple-800">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex flex-wrap justify-center md:justify-start gap-8 mb-4 md:mb-0">
              <a href="https://facebook.com" target="_blank" class="text-gray-400 hover:text-white transform hover:scale-110 transition-transform">
                <Icon name="facebook" prefix="fab" size="lg" />
                <span class="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" class="text-gray-400 hover:text-white transform hover:scale-110 transition-transform">
                <Icon name="instagram" prefix="fab" size="lg" />
                <span class="sr-only">Instagram</span>
              </a>
              <a href="https://x.com" target="_blank" class="text-gray-400 hover:text-white transform hover:scale-110 transition-transform">
                <Icon name="x-twitter" prefix="fab" size="lg" />
                <span class="sr-only">X (Twitter)</span>
              </a>
              <a href="https://xing.com" target="_blank" class="text-gray-400 hover:text-white transform hover:scale-110 transition-transform">
                <Icon name="xing" prefix="fab" size="lg" />
                <span class="sr-only">Xing</span>
              </a>
              <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-white transform hover:scale-110 transition-transform">
                <Icon name="linkedin" prefix="fab" size="lg" />
                <span class="sr-only">LinkedIn</span>
              </a>
            </div>
            <p class="text-gray-400 text-sm text-center md:text-right"> 2025 Raleo Digital GmbH</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const isScrollingUp = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
  isScrollingUp.value = window.scrollY < window.prevScrollY
  window.prevScrollY = window.scrollY
}

onMounted(() => {
  window.prevScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navigation = [
  { name: 'Heizung', href: '/heizung', subcategories: 25 },
  { name: 'Klima', href: '/klima', subcategories: 15 },
  { name: 'Ersatzteile', href: '/ersatzteile', subcategories: 100 },
  { name: 'Installation', href: '/installation', subcategories: 5 },
  { name: 'Marken', href: '/marken', subcategories: 50 },
  { name: 'SALE', href: '/sale', subcategories: 10 }
]
</script>
