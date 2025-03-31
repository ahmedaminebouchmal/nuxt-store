// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/main.css'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ["@nuxt/image"],

  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  runtimeConfig: {
    elasticsearchUrl: process.env.ELASTICSEARCH_URL,
    public: {
      // Public runtime config
    }
  }
})