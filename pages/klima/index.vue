<template>
  <ProductList
    title="Klima"
    description="Professionelle Klimageräte und Zubehör für optimales Raumklima"
    :products="products"
    :filters="filters"
  />
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "REMKO Klimagerät",
    description: "Effiziente Raumklimatisierung",
    price: 1299.99,
    image: "REMKO-262310.jpg"
  },
  {
    id: 2,
    name: "DAIKIN Altherma",
    description: "Hocheffiziente Wärmepumpe",
    price: 3499.99,
    image: "Goodwe.webp"
  },
  {
    id: 3,
    name: "Wolf Wärmepumpe",
    description: "FHA Center mit Warmwasserspeicher",
    price: 4299.99,
    image: "Kermi.webp"
  }
]

const filters = [
  {
    name: "Hersteller",
    options: [
      { label: "REMKO", value: "remko" },
      { label: "DAIKIN", value: "daikin" },
      { label: "Wolf", value: "wolf" }
    ]
  },
  {
    name: "Typ",
    options: [
      { label: "Klimageräte", value: "klimageraet" },
      { label: "Wärmepumpen", value: "waermepumpe" },
      { label: "Zubehör", value: "zubehoer" }
    ]
  },
  {
    name: "Preis",
    options: [
      { label: "Bis 1.500 €", value: "1500" },
      { label: "1.500 € - 3.000 €", value: "3000" },
      { label: "3.000 € - 5.000 €", value: "5000" },
      { label: "Über 5.000 €", value: "5000plus" }
    ]
  }
]
</script>
