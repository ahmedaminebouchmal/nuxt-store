<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-purple-300 mb-8">Häufig gestellte Fragen</h1>
    
    <div class="space-y-6">
      <div v-for="(faq, index) in faqs" :key="index" class="bg-[#0D001A] rounded-lg border border-purple-800">
        <button 
          @click="faq.isOpen = !faq.isOpen"
          class="w-full px-6 py-4 flex justify-between items-center text-left"
        >
          <span class="text-lg font-semibold text-purple-300">{{ faq.question }}</span>
          <svg 
            class="w-5 h-5 text-purple-400 transform transition-transform"
            :class="{ 'rotate-180': faq.isOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="faq.isOpen" class="px-6 pb-4">
          <p class="text-purple-400">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const faqs = reactive([
  {
    question: 'Wie lange dauert die Lieferung?',
    answer: 'Die Standardlieferzeit beträgt 2-4 Werktage innerhalb Deutschlands. Für internationale Bestellungen kann die Lieferzeit 5-10 Werktage betragen.',
    isOpen: false
  },
  {
    question: 'Welche Zahlungsmethoden werden akzeptiert?',
    answer: 'Wir akzeptieren PayPal, Kreditkarte (Visa, Mastercard), Sofortüberweisung und Rechnung.',
    isOpen: false
  },
  {
    question: 'Wie funktioniert die Rückgabe?',
    answer: 'Sie haben 30 Tage Zeit, um Artikel zurückzusenden. Die Artikel müssen unbenutzt und in der Originalverpackung sein. Die Rücksendekosten übernehmen wir für Sie.',
    isOpen: false
  },
  {
    question: 'Gibt es eine Mindestbestellmenge?',
    answer: 'Nein, es gibt keine Mindestbestellmenge. Sie können beliebig viele Artikel bestellen.',
    isOpen: false
  },
  {
    question: 'Wie kann ich den Bestellstatus überprüfen?',
    answer: 'Nach der Bestellung erhalten Sie eine Bestätigungs-E-Mail mit einer Tracking-Nummer. Damit können Sie den Status Ihrer Bestellung jederzeit online verfolgen.',
    isOpen: false
  }
])
</script>
