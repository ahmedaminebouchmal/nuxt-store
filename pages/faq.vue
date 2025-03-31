<template>
  <div class="max-w-4xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 pb-12">
    <h1 class="text-4xl font-bold text-gray-100 mb-8">Häufig gestellte Fragen</h1>
    
    <div class="space-y-6">
      <div v-for="(faq, index) in faqs" :key="index" class="bg-gray-900 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
        <button 
          @click="faq.isOpen = !faq.isOpen"
          class="w-full px-6 py-4 flex justify-between items-center text-left"
        >
          <span class="text-lg font-semibold text-gray-100">{{ faq.question }}</span>
          <svg 
            class="w-5 h-5 text-gray-400 transform transition-transform"
            :class="{ 'rotate-180': faq.isOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="faq.isOpen" class="px-6 pb-4">
          <p class="text-gray-300">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const faqs = reactive([
  {
    question: 'Wie lange dauert die Lieferung?',
    answer: 'Die Standardlieferzeit beträgt 2-4 Werktage innerhalb Deutschlands. Für internationale Bestellungen kann die Lieferzeit 5-10 Werktage betragen. Express-Lieferung ist auf Anfrage möglich.',
    isOpen: false
  },
  {
    question: 'Welche Zahlungsmethoden werden akzeptiert?',
    answer: 'Wir bieten verschiedene sichere Zahlungsmöglichkeiten an: PayPal, Kreditkarte (Visa, Mastercard, American Express), Sofortüberweisung, Klarna und Kauf auf Rechnung (nach Bonitätsprüfung).',
    isOpen: false
  },
  {
    question: 'Wie funktioniert die Rückgabe?',
    answer: 'Sie haben 30 Tage Zeit, um Artikel zurückzusenden. Die Artikel müssen unbenutzt und in der Originalverpackung sein. Die Rücksendekosten übernehmen wir für Sie. Kontaktieren Sie einfach unseren Kundenservice, und wir senden Ihnen ein kostenloses Rücksendeetikett zu.',
    isOpen: false
  },
  {
    question: 'Gibt es eine Mindestbestellmenge?',
    answer: 'Nein, es gibt keine Mindestbestellmenge. Sie können beliebig viele Artikel bestellen. Ab einem Bestellwert von 100€ liefern wir versandkostenfrei innerhalb Deutschlands.',
    isOpen: false
  },
  {
    question: 'Bieten Sie Beratung vor dem Kauf an?',
    answer: 'Ja, unsere Experten stehen Ihnen für eine kostenlose Beratung zur Verfügung. Sie können uns per Telefon, E-Mail oder über unser Kontaktformular erreichen. Für komplexe Heizungssysteme bieten wir auch Vor-Ort-Beratung an.',
    isOpen: false
  },
  {
    question: 'Wie sind die Garantiebedingungen?',
    answer: 'Alle unsere Produkte haben mindestens 2 Jahre Garantie. Viele Heizungssysteme bieten sogar bis zu 5 Jahre Herstellergarantie. Bei fachgerechter Installation durch einen zertifizierten Partner verlängert sich die Garantiezeit oft um weitere 2 Jahre.',
    isOpen: false
  },
  {
    question: 'Bieten Sie auch Installation und Wartung an?',
    answer: 'Ja, wir arbeiten mit einem Netzwerk zertifizierter Installateure zusammen. Bei Bedarf vermitteln wir Ihnen gerne einen qualifizierten Partner in Ihrer Region. Die Installation kann direkt bei der Bestellung mit gebucht werden.',
    isOpen: false
  },
  {
    question: 'Gibt es Finanzierungsmöglichkeiten?',
    answer: 'Ja, wir bieten verschiedene Finanzierungsoptionen an. Sie können zwischen Ratenzahlung (0% bis 36 Monate bei Beträgen ab 500€) oder Leasing wählen. Zusätzlich beraten wir Sie gerne zu verfügbaren staatlichen Förderungen.',
    isOpen: false
  }
])
</script>
