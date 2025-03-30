<template>
  <ProductList
    title="Photovoltaik"
    description="Moderne Photovoltaik-Systeme für nachhaltige Energiegewinnung"
    :products="products"
    :filters="filters"
  />
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Fronius Symo Advanced",
    description: "10.0-3-M WLAN/LAN Wechselrichter",
    price: 2499.99,
    image: "Goodwe.webp"
  },
  {
    id: 2,
    name: "SolarEdge Wechselrichter",
    description: "SE-12500-3PH-NET",
    price: 3199.99,
    image: "Kermi.webp"
  },
  {
    id: 3,
    name: "HUAWEI SUN2000",
    description: "KTL-M5 Serie",
    price: 1899.99,
    image: "retro1.webp"
  },
  {
    id: 4,
    name: "RCT Power Storage",
    description: "4.0 Batteriespeicher",
    price: 4599.99,
    image: "broetje.webp"
  }
]

const filters = [
  {
    name: "Hersteller",
    options: [
      { label: "Fronius", value: "fronius" },
      { label: "SolarEdge", value: "solaredge" },
      { label: "HUAWEI", value: "huawei" },
      { label: "RCT", value: "rct" }
    ]
  },
  {
    name: "Typ",
    options: [
      { label: "Wechselrichter", value: "wechselrichter" },
      { label: "Speichersysteme", value: "speicher" },
      { label: "Module", value: "module" },
      { label: "Zubehör", value: "zubehoer" }
    ]
  },
  {
    name: "Preis",
    options: [
      { label: "Bis 2.000 €", value: "2000" },
      { label: "2.000 € - 3.000 €", value: "3000" },
      { label: "3.000 € - 4.000 €", value: "4000" },
      { label: "Über 4.000 €", value: "4000plus" }
    ]
  }
]
</script>
