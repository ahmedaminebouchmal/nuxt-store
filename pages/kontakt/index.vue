<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-white mb-8">Kontakt</h1>
    <div class="bg-[#1A0033] rounded-lg p-6">
      <form class="max-w-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="block text-sm text-gray-400 mb-1">Name</label>
            <input type="text" class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">E-Mail</label>
            <input type="email" class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>
        <div class="mb-6">
          <label class="block text-sm text-gray-400 mb-1">Betreff</label>
          <input type="text" class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div class="mb-6">
          <label class="block text-sm text-gray-400 mb-1">Nachricht</label>
          <textarea rows="6" class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
        </div>
        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Nachricht senden
        </button>
      </form>
    </div>
  </div>
</template>
