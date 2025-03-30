<template>
  <ProductList
    title="Heizung"
    description="Entdecken Sie unser umfangreiches Sortiment an Heizsystemen und Zubehör"
    :products="products"
    :filters="filters"
  />
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Viessmann Vitodens 200-W",
    description: "Hocheffizienter Gas-Brennwertkessel",
    price: 3299.99,
    image: "Vitodens_200-W.webp"
  },
  {
    id: 2,
    name: "Vaillant Heizungswaermepumpe",
    description: "Luft-Wasser aroTHERM plus",
    price: 4599.99,
    image: "vaillant_logo.webp"
  },
  {
    id: 3,
    name: "Zehnder Bad Design Heizkörper",
    description: "Radiator Zeno Serie",
    price: 599.99,
    image: "retro1.webp"
  },
  {
    id: 4,
    name: "Bosch Gas-Brennwertgerät",
    description: "Wandhängend mit Touch-Bedienfeld",
    price: 2899.99,
    image: "broetje.webp"
  }
]

const filters = [
  {
    name: "Hersteller",
    options: [
      { label: "Viessmann", value: "viessmann" },
      { label: "Vaillant", value: "vaillant" },
      { label: "Bosch", value: "bosch" },
      { label: "Zehnder", value: "zehnder" }
    ]
  },
  {
    name: "Typ",
    options: [
      { label: "Gas-Brennwertkessel", value: "gas" },
      { label: "Wärmepumpe", value: "waermepumpe" },
      { label: "Heizkörper", value: "heizkoerper" },
      { label: "Zubehör", value: "zubehoer" }
    ]
  },
  {
    name: "Preis",
    options: [
      { label: "Bis 1.000 €", value: "1000" },
      { label: "1.000 € - 3.000 €", value: "3000" },
      { label: "3.000 € - 5.000 €", value: "5000" },
      { label: "Über 5.000 €", value: "5000plus" }
    ]
  }
]
</script>
