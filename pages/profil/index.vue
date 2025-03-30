<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-white mb-8">Mein Profil</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-[#1A0033] rounded-lg p-6">
        <h2 class="text-xl font-bold text-white mb-4">Persönliche Daten</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-gray-400 mb-1">Name</label>
            <input type="text" class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">E-Mail</label>
            <input type="email" class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>
      </div>
      <div class="bg-[#1A0033] rounded-lg p-6">
        <h2 class="text-xl font-bold text-white mb-4">Passwort ändern</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-gray-400 mb-1">Aktuelles Passwort</label>
            <input type="password" class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label class="block text-sm text-gray-400 mb-1">Neues Passwort</label>
            <input type="password" class="w-full bg-[#2D1F3D] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
