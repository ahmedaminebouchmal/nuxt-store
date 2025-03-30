<template>
  <ProductList
    title="Ersatzteile"
    description="Original Ersatzteile für Ihre Heizungs- und Klimaanlagen"
    :products="products"
    :filters="filters"
  />
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Vaillant Heizungsregler",
    description: "sensoCOMFORT VRC 720f",
    price: 299.99,
    image: "vaillant_logo.webp"
  },
  {
    id: 2,
    name: "Bosch Blaubrenner",
    description: "Suprastar O BE 28",
    price: 449.99,
    image: "broetje.webp"
  },
  {
    id: 3,
    name: "Hansgrohe Kopfbrause",
    description: "Rainmaker Select 580 3jet",
    price: 799.99,
    image: "retro1.webp"
  },
  {
    id: 4,
    name: "Remeha Bogen",
    description: "45° AW konzentrisch",
    price: 39.99,
    image: "Kermi.webp"
  }
]

const filters = [
  {
    name: "Kategorie",
    options: [
      { label: "Regelungstechnik", value: "regelung" },
      { label: "Brenner", value: "brenner" },
      { label: "Sanitär", value: "sanitaer" },
      { label: "Abgassysteme", value: "abgas" }
    ]
  },
  {
    name: "Hersteller",
    options: [
      { label: "Vaillant", value: "vaillant" },
      { label: "Bosch", value: "bosch" },
      { label: "Hansgrohe", value: "hansgrohe" },
      { label: "Remeha", value: "remeha" }
    ]
  },
  {
    name: "Preis",
    options: [
      { label: "Bis 100 €", value: "100" },
      { label: "100 € - 300 €", value: "300" },
      { label: "300 € - 500 €", value: "500" },
      { label: "Über 500 €", value: "500plus" }
    ]
  }
]
</script>
