<template>
  <div>Redirecting...</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

// Redirect to dashboard
navigateTo('/admin/dashboard')
</script>
