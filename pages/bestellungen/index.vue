<template>
  <div class="max-w-6xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 pb-12">
    <h1 class="text-4xl font-bold text-gray-100 mb-8">Meine Bestellungen</h1>
    
    <!-- Filter und Suche -->
    <div class="bg-gray-900 rounded-lg p-6 border border-gray-700 mb-8">
      <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div class="flex gap-4 w-full md:w-auto">
          <select class="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2">
            <option value="all">Alle Bestellungen</option>
            <option value="processing">In Bearbeitung</option>
            <option value="shipped">Versendet</option>
            <option value="delivered">Geliefert</option>
          </select>
          <select class="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2">
            <option value="30">Letzte 30 Tage</option>
            <option value="90">Letzte 90 Tage</option>
            <option value="365">Letztes Jahr</option>
            <option value="all">Alle Zeit</option>
          </select>
        </div>
        <div class="relative w-full md:w-64">
          <input type="text" placeholder="Bestellung suchen..." class="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg pl-10 pr-4 py-2">
          <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Beispiel-Bestellungen -->
    <div class="space-y-6">
      <!-- Bestellung 1 -->
      <div class="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
        <div class="p-6">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-xl font-semibold text-gray-100">Bestellung #12345</h3>
                <span class="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400">In Bearbeitung</span>
              </div>
              <p class="text-gray-400 mt-1">Bestellt am 28. März 2025</p>
            </div>
            <div class="flex gap-4">
              <button class="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Details
              </button>
              <button class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                Sendungsverfolgung
              </button>
            </div>
          </div>
          <div class="mt-6 border-t border-gray-800 pt-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Produkte</h4>
                <ul class="space-y-3">
                  <li class="flex items-center gap-4">
                    <img src="/img/Bosch Olio Conderns 8000i FM gallery 1.jpg" alt="Bosch Olio Condens 8000i" class="w-16 h-16 object-cover rounded-lg">
                    <div>
                      <p class="text-gray-200">Bosch Olio Condens 8000i</p>
                      <p class="text-gray-400">Menge: 1</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="md:w-48">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Lieferadresse</h4>
                <p class="text-gray-300">Max Mustermann<br>Musterstraße 123<br>12345 Musterstadt</p>
              </div>
              <div class="md:w-48">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Gesamtbetrag</h4>
                <p class="text-2xl font-bold text-gray-100">2.499,00 €</p>
                <p class="text-gray-400 text-sm">inkl. MwSt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bestellung 2 -->
      <div class="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
        <div class="p-6">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-xl font-semibold text-gray-100">Bestellung #12344</h3>
                <span class="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-400">Geliefert</span>
              </div>
              <p class="text-gray-400 mt-1">Bestellt am 15. März 2025</p>
            </div>
            <div class="flex gap-4">
              <button class="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Details
              </button>
              <button class="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
                Erneut bestellen
              </button>
            </div>
          </div>
          <div class="mt-6 border-t border-gray-800 pt-6">
            <div class="flex flex-col md:flex-row gap-6">
              <div class="flex-1">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Produkte</h4>
                <ul class="space-y-3">
                  <li class="flex items-center gap-4">
                    <img src="/img/HUAWEI-SUN2000-KTL-M5.jpg" alt="HUAWEI SUN2000" class="w-16 h-16 object-cover rounded-lg">
                    <div>
                      <p class="text-gray-200">HUAWEI SUN2000</p>
                      <p class="text-gray-400">Menge: 2</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="md:w-48">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Lieferadresse</h4>
                <p class="text-gray-300">Max Mustermann<br>Musterstraße 123<br>12345 Musterstadt</p>
              </div>
              <div class="md:w-48">
                <h4 class="text-sm font-medium text-gray-400 mb-2">Gesamtbetrag</h4>
                <p class="text-2xl font-bold text-gray-100">1.998,00 €</p>
                <p class="text-gray-400 text-sm">inkl. MwSt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Keine Bestellungen -->
      <div v-if="false" class="bg-gray-900 rounded-lg p-6 border border-gray-700 text-center">
        <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h3 class="text-xl font-semibold text-gray-100 mb-2">Keine Bestellungen gefunden</h3>
        <p class="text-gray-400 mb-6">Sie haben noch keine Bestellungen aufgegeben.</p>
        <a href="/products" class="inline-block px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          Jetzt einkaufen
        </a>
      </div>
    </div>
  </div>
</template>
