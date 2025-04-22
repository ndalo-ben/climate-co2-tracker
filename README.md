# 🌍 CO₂ Emissions Explorer

**An open-source, interactive, and beautiful CO₂ data visualization tool built with Next.js, TypeScript, Tailwind CSS, and Recharts.**

Explore historical CO₂ emissions trends, growth, and energy insights by country. Designed to inform, engage, and empower users with real-time, dynamic visual data — all while contributing to global climate awareness.

<br/>

## 🎥 How the Platform Works

Here’s a video showing how the platform works:

![Video preview](https://climate-co2-tracker.vercel.app/video-preview.png)  <!-- Replace with actual screenshot or GIF -->

[Watch the video](/public/videos/how-it-works.mp4)


---

## 🚀 Features

- 🔍 **Country Selector** – Easily search and select from 200+ countries and regions.
- 📈 **Interactive Line Charts** – Compare CO₂ emissions, growth trends, and other greenhouse gases over time.
- 📊 **Summary Statistics** – Key metrics like per capita emissions, global share, GDP, and energy consumption.
- 🎨 **Dark Themed UI** – Clean, modern interface styled with Tailwind CSS.
- ⚡ **Fast & Optimized** – Blazing fast thanks to Next.js and static JSON data processing.
- 🧠 **Typed & Reliable** – Built with TypeScript and type-safe components.
- 📦 **Modular & Extendable** – Easily plug in new datasets or chart types.
- 👐 **Open Source** – Built with ❤️ for the community and climate.

---

## 📁 Project Structure

```bash
.
├── app/
│   ├── page.tsx              # Main Chart Page
│   └── components/
│       └── SummaryStats.tsx  # Summary metrics section
├── data/
│   └── owid-co2-data.json    # Raw CO2 data (from Our World In Data)
├── lib/
│   └── data.ts               # Data utility functions (filtering, sorting, etc.)
├── public/
│   └── assets/               # Images and static assets
├── styles/
│   └── globals.css           # Global Tailwind styles
├── types/
│   └── co2.ts                # CO2 data TypeScript types
├── README.md                 # You're here!
├── package.json
└── tsconfig.json
```

---

## 📊 Data Source

- **Source**: [Our World in Data](https://github.com/owid/co2-data)
- **License**: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Last updated**: *Dataset includes emissions data up to 2023*

---

## 🧠 Technologies Used

| Tech         | Description                         |
|--------------|-------------------------------------|
| **Next.js 15+** | App directory, Server Components |
| **TypeScript** | Strong typing across the app      |
| **Tailwind CSS** | Utility-first modern styling    |
| **Recharts** | Beautiful data visualization       |
| **React Select** | Dropdown country filter         |
| **OWID CO₂ JSON** | Open-source data format        |

---

## 🛠️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/ndalo-ben/climate-co2-tracker.git
cd co2-explorer
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open your browser at `http://localhost:3000`

---

## 🌐 Deployment

We recommend [Vercel](https://vercel.com/) for instant deployment:

```bash
npx vercel
```

Or deploy with any platform that supports Next.js 14+.

---

## ✅ Hackathon Goals

- 📡 Make climate data **accessible**, **interactive**, and **open-source**
- 🧩 Build a **fully extendable** platform that can support more environmental data sets in the future
- 👨‍👩‍👧‍👦 Empower **individuals**, **governments**, and **NGOs** with **insights**
- 💚 Drive **climate education** through design and technology

---

## 🙋‍♀️ Contributing

We welcome contributions from the community! Here’s how you can help:

### 📦 Add features

- 🌟 Add bar charts, pie charts, or heatmaps
- 🌍 Add map-based visualizations using D3 or Leaflet
- 📅 Add date range filtering and zooming
- 📈 Add comparisons between multiple countries

### 🐛 Report or fix bugs

- Found a bug or performance issue? Please open an [issue](https://github.com/ndalo-ben/climate-co2-tracker/issues)

### 📘 Improve Documentation

- Help make this README or in-app descriptions even better.

---

## 🔐 License

MIT License © 2025 [Benard Ouma](https://github.com/ndalo-ben)

Data is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

---

## 📣 Shoutouts

- 🌐 [Our World In Data](https://ourworldindata.org/co2-emissions) for the original dataset.
- 🎨 Inspiration from clean UI dashboards.
- 🤝 Everyone contributing to open source for climate.

---

## 🏆 Let’s Win the Hackathon!

We’re building this with the intent to **educate, inspire**, and **spark change**. If you believe in open data, climate transparency, and using technology for good — star the repo, contribute, and help us make an impact.

**💬 Questions, ideas, or partnerships?** Reach out via [GitHub Discussions](https://github.com/ndalo-ben/climate-co2-tracker/discussions) or open an issue.

---

## ⭐️ Show Your Support

If you like the project:

- ⭐️ Star this repo
- 🍴 Fork it
- 🧑‍💻 Use it in your climate tech stack
- 💬 Share it on social media using `#CO2Explorer`

---

**Let’s build for the planet. One line of code at a time.**

🌿

---
