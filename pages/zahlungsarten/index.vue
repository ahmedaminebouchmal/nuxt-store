<template>
  <div class="max-w-6xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 pb-12">
    <h1 class="text-4xl font-bold text-gray-100 mb-8">Zahlungsarten</h1>
    
    <div class="grid gap-8">
      <!-- PayPal -->
      <div class="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <div class="flex items-center gap-6">
          <img src="public/img/paypal.webp" alt="PayPal" class="h-12 w-auto">
          <div>
            <h2 class="text-xl font-semibold text-gray-100 mb-2">PayPal</h2>
            <p class="text-gray-400">Bezahlen Sie sicher und einfach mit Ihrem PayPal-Konto. Die Zahlung wird sofort bestätigt.</p>
          </div>
        </div>
      </div>

      <!-- Kreditkarte -->
      <div class="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <div class="flex items-center gap-6">
          <div class="h-12 flex items-center gap-2">
            <img src="/public/img/Viessmann Vitodens 200-W 60 B2HAI36 Vitodens 200-W B2HAI35.webp" alt="Visa" class="h-8 w-auto">
            <img src="/public/img/paypal.webp" alt="Mastercard" class="h-8 w-auto">
          </div>
          <div>
            <h2 class="text-xl font-semibold text-gray-100 mb-2">Kreditkarte</h2>
            <p class="text-gray-400">Wir akzeptieren Visa, Mastercard und American Express. Ihre Zahlung wird sicher über unseren Payment Service Provider abgewickelt.</p>
          </div>
        </div>
      </div>

      <!-- Klarna -->
      <div class="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <div class="flex items-center gap-6">
          <img src="/public/img/klarna.webp" alt="Klarna" class="h-12 w-auto">
          <div>
            <h2 class="text-xl font-semibold text-gray-100 mb-2">Klarna</h2>
            <p class="text-gray-400">Bezahlen Sie flexibel in Raten oder später mit Klarna. Einfache Anmeldung und sofortige Entscheidung.</p>
          </div>
        </div>
      </div>

      <!-- SEPA-Lastschrift -->
      <div class="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <div class="flex items-center gap-6">
          <div class="h-12 w-12 flex items-center justify-center bg-gray-800 rounded-lg">
            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-gray-100 mb-2">SEPA-Lastschrift</h2>
            <p class="text-gray-400">Zahlen Sie bequem per Lastschrift von Ihrem Bankkonto. Der Betrag wird automatisch eingezogen.</p>
          </div>
        </div>
      </div>

      <!-- Vorkasse -->
      <div class="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <div class="flex items-center gap-6">
          <div class="h-12 w-12 flex items-center justify-center bg-gray-800 rounded-lg">
            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div>
            <h2 class="text-xl font-semibold text-gray-100 mb-2">Vorkasse</h2>
            <p class="text-gray-400">Überweisen Sie den Betrag vorab auf unser Bankkonto. Die Lieferung erfolgt nach Zahlungseingang.</p>
          </div>
        </div>
      </div>

      <!-- Finanzierung -->
      <div class="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h2 class="text-2xl font-bold text-gray-100 mb-4">Finanzierung</h2>
        <p class="text-gray-400 mb-6">
          Für größere Anschaffungen bieten wir Ihnen in Zusammenarbeit mit unseren Finanzierungspartnern flexible Ratenzahlungen an.
        </p>
        <div class="grid gap-4">
          <div class="flex items-center gap-4 text-gray-300">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Flexible Laufzeiten von 12 bis 72 Monaten</span>
          </div>
          <div class="flex items-center gap-4 text-gray-300">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Günstige Zinssätze</span>
          </div>
          <div class="flex items-center gap-4 text-gray-300">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Schnelle Online-Zusage</span>
          </div>
          <div class="flex items-center gap-4 text-gray-300">
            <svg class="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Vorzeitige Rückzahlung jederzeit möglich</span>
          </div>
        </div>
        <div class="mt-6">
          <a href="/financing" class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            Mehr über Finanzierung erfahren
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Sicherheit -->
      <div class="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h2 class="text-2xl font-bold text-gray-100 mb-4">Sicherheit beim Bezahlen</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <h3 class="text-lg font-semibold text-gray-100 mb-2">SSL-Verschlüsselung</h3>
            <p class="text-gray-400">
              Alle Zahlungsdaten werden verschlüsselt übertragen. Unsere Website verwendet modernste SSL-Technologie für maximale Sicherheit.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-100 mb-2">Geprüfter Shop</h3>
            <p class="text-gray-400">
              Wir sind ein zertifizierter Online-Shop und erfüllen höchste Sicherheitsstandards im E-Commerce.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
