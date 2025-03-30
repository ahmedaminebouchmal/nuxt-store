# 🔥 Heizungssysteme Online-Shop

<div align="center">

![Heizungssysteme](public/img/header-1.webp)

Ein moderner E-Commerce-Shop für Heizungssysteme und Zubehör, entwickelt mit modernsten Technologien für optimale Leistung und Skalierbarkeit.

[![Nuxt][Nuxt.js]][Nuxt-url] [![Vue][Vue.js]][Vue-url] [![TailwindCSS][TailwindCSS]][Tailwind-url] [![Docker][Docker]][Docker-url] [![Prisma][Prisma]][Prisma-url] [![MariaDB][MariaDB]][MariaDB-url] [![MySQL][MySQL]][MySQL-url]

</div>

## 💫 Entwickelt von

<div align="center">
  <a href="mailto:bouchmalaabesp@gmail.com">
    <strong>Ahmed Amine Bouchmal</strong><br>
    bouchmalaabesp@gmail.com
  </a>
</div>

## 🚀 Technologie-Stack

- **Frontend-Framework:**
  - Nuxt.js 3.16.1
  - Vue.js 3
  - Vue Router 4

- **UI/Styling:**
  - TailwindCSS 4.0.17
  - FontAwesome Icons

- **Datenbank:**
  - MariaDB (mit mysql2-Treiber)
  - Elasticsearch für leistungsstarke Produktsuche
  - Prisma als ORM

- **Bildverarbeitung:**
  - @nuxt/image 1.10.0

## ✨ Hauptfunktionen

<div align="center">

| 🎯 Feature | 📝 Beschreibung |
|------------|----------------|
| 🌐 Moderne UI | Responsive Benutzeroberfläche für alle Geräte |
| ⚡ SSR | Server-seitiges Rendering mit Nuxt 3 |
| 🔍 Suche | Schnelle Produktsuche mit Elasticsearch |
| 💾 Datenbank | Robuste Datenpersistenz mit MariaDB |
| 🖼️ Bilder | Dynamische Bildoptimierung |
| 🏗️ Architektur | Komponentenbasierte Entwicklung |
| 📱 Responsive | Optimiert für Desktop und Mobile |
| 🌍 Mehrsprachig | Deutsch/Englisch Unterstützung |

</div>

## 🚦 Installation

1. Repository klonen
2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
3. Umgebungsvariablen konfigurieren für:
   - MariaDB-Verbindung
   - Elasticsearch-Verbindung

4. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```

## 📦 Verfügbare Skripte

- `npm run dev` - Entwicklungsserver starten
- `npm run build` - Für Produktion bauen
- `npm run generate` - Statische Seite generieren
- `npm run preview` - Produktions-Build vorschauen
- `npm run postinstall` - Nuxt vorbereiten

## 🔧 Voraussetzungen

- Node.js
- MariaDB
- Elasticsearch
- npm oder yarn
- Docker

## 📝 Lizenz

MIT-Lizenz 2025 Ahmed Amine Bouchmal

## Database Setup

### Docker MariaDB
The project uses MariaDB running in Docker with the following features:
- UTF8MB4 character encoding for full Unicode support
- InnoDB as default storage engine
- Custom configuration for optimal performance
- Persistent data storage using Docker volumes
- Health checks for container monitoring

To run the database:
```bash
# Build the Docker image
docker build -t heizung-db .

# Run the container
docker run -d --env-file .env -p 3307:3306 -v mysql_data:/var/lib/mysql --name heizung-mariadb heizung-db
```

### Prisma ORM
The project uses Prisma as the ORM with the following models:
- User (authentication and user management)
- Product (with multiple images support)
- Category and Brand (product organization)
- Cart and CartItem (shopping cart functionality)
- Order and OrderItem (order management)

To work with Prisma:
```bash
# Push schema changes to database
npx prisma db push

# Open Prisma Studio
npx prisma studio

# Generate Prisma Client
npx prisma generate
```

<!-- MARKDOWN LINKS & IMAGES -->
[Nuxt.js]: https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82
[Nuxt-url]: https://nuxt.com/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[MariaDB]: https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white
[MariaDB-url]: https://mariadb.org/
[MySQL]: https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/
