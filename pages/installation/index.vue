<template>
  <ProductList
    title="Installation"
    description="Professionelles Installationszubehör und Werkzeuge"
    :products="products"
    :filters="filters"
  />
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Wilo Yonos MAXO-Z",
    description: "Hocheffizienz-Pumpe",
    price: 599.99,
    image: "Pumpen_category.jpg"
  },
  {
    id: 2,
    name: "Roth Doppelwand-Tank",
    description: "1000 Liter Speicher",
    price: 899.99,
    image: "Speicher_category.jpg"
  },
  {
    id: 3,
    name: "Wolf Pufferspeicher",
    description: "BSH-500 mit Wärmetauscher",
    price: 1299.99,
    image: "Kermi.webp"
  },
  {
    id: 4,
    name: "Bosch Installationszubehör",
    description: "HSM 25-6 Heizkreisset",
    price: 449.99,
    image: "Goodwe.webp"
  }
]

const filters = [
  {
    name: "Kategorie",
    options: [
      { label: "Pumpen", value: "pumpen" },
      { label: "Speicher", value: "speicher" },
      { label: "Rohre & Fittings", value: "rohre" },
      { label: "Werkzeuge", value: "werkzeuge" }
    ]
  },
  {
    name: "Preis",
    options: [
      { label: "Bis 500 €", value: "500" },
      { label: "500 € - 1.000 €", value: "1000" },
      { label: "1.000 € - 2.000 €", value: "2000" },
      { label: "Über 2.000 €", value: "2000plus" }
    ]
  },
  {
    name: "Marke",
    options: [
      { label: "Wilo", value: "wilo" },
      { label: "Roth", value: "roth" },
      { label: "Wolf", value: "wolf" },
      { label: "Bosch", value: "bosch" }
    ]
  }
]
</script>
