<template>
  <NuxtLink :to="to" class="group">
    <div class="bg-[#2D1F3D] rounded-lg p-6 transition-transform transform hover:scale-105">
      <NuxtImg 
        :src="image" 
        :alt="title" 
        class="w-full h-48 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h3 class="text-xl font-semibold text-white mb-2">{{ title }}</h3>
      <p class="text-gray-400">{{ description }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
