<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-purple-300 mb-8">Kontakt</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Form -->
      <div class="bg-[#0D001A] p-6 rounded-lg border border-purple-800">
        <h2 class="text-xl font-bold text-purple-300 mb-6">Kontaktformular</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-purple-300 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              class="w-full bg-[#1A0033] border border-purple-800 rounded p-2 text-purple-300 focus:outline-none focus:border-purple-600"
              required
            >
          </div>
          
          <div>
            <label for="email" class="block text-purple-300 mb-2">E-Mail</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              class="w-full bg-[#1A0033] border border-purple-800 rounded p-2 text-purple-300 focus:outline-none focus:border-purple-600"
              required
            >
          </div>
          
          <div>
            <label for="message" class="block text-purple-300 mb-2">Nachricht</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="4" 
              class="w-full bg-[#1A0033] border border-purple-800 rounded p-2 text-purple-300 focus:outline-none focus:border-purple-600"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-purple-700 text-purple-200 py-2 px-4 rounded hover:bg-purple-600 transition-colors"
          >
            Nachricht senden
          </button>
        </form>
      </div>
      
      <!-- Contact Info -->
      <div class="space-y-6">
        <div class="bg-[#0D001A] p-6 rounded-lg border border-purple-800">
          <h2 class="text-xl font-bold text-purple-300 mb-4">Kontaktinformationen</h2>
          <div class="space-y-3 text-purple-400">
            <p>
              <strong class="text-purple-300">Adresse:</strong><br>
              Musterstraße 123<br>
              12345 Berlin<br>
              Deutschland
            </p>
            <p>
              <strong class="text-purple-300">E-Mail:</strong><br>
              info@raleo.de
            </p>
            <p>
              <strong class="text-purple-300">Telefon:</strong><br>
              +49 (0) 123 456789
            </p>
          </div>
        </div>
        
        <div class="bg-[#0D001A] p-6 rounded-lg border border-purple-800">
          <h2 class="text-xl font-bold text-purple-300 mb-4">Öffnungszeiten</h2>
          <div class="space-y-2 text-purple-400">
            <p>Montag - Freitag: 9:00 - 18:00</p>
            <p>Samstag: 10:00 - 14:00</p>
            <p>Sonntag: Geschlossen</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form)
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
  alert('Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.')
}
</script>
