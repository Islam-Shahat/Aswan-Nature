# 🪶 Aswan Nature | أسوان للطبيعة

> **Ecotourism & Birdwatching Experience in Aswan, Egypt**  
> An interactive, responsive web platform celebrating the wildlife, migratory birds of the Nile, and ancient Egyptian natural heritage.

---

## 🌟 Highlights & Features

- **🌐 Bilingual Support (English & Arabic):** Full dynamic switching between English (LTR) and Arabic (RTL) with culturally adapted typography.
- **🦅 Curated Birdwatching Tours:** Exploration itineraries for the Nile cataracts, Lake Nasser, and protected nature reserves.
- **🏛️ Pharaohs & Nature Section:** Historical storytelling bridging ancient Egyptian temple frescoes (Horus falcon, sacred ibis, Meidum geese) with modern biodiversity.
- **📅 Interactive Booking System:** Fast, modal-based reservation flows with date pickers, guest selectors, and tailored local/international rate calculators.
- **🎨 Modern Visual Design:** Smooth animations, papyrus & earth-tone aesthetics, clean glassmorphism accents, and accessible iconography.
- **📱 Fully Responsive:** Optimized across mobile handsets, tablets, and wide desktop displays.

---

## 🛠️ Built With

- **[React 19](https://react.dev/):** Component-driven interface and reactive state management.
- **[Vite](https://vite.dev/):** Next-generation frontend tooling and rapid hot module replacement (HMR).
- **[Tailwind CSS v4](https://tailwindcss.com/):** Modern utility-first styling system.
- **[Lucide React](https://lucide.dev/):** Clean, consistent vector icon set.

---

## 📁 Project Structure

```text
aswan-nature/
├── public/              # Static media, icons, and hero illustrations
│   └── assets/          # High-resolution nature & fresco photography
├── src/
│   ├── components/      # Modular UI components & modals
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── QuickBooking.jsx
│   │   ├── ToursSection.jsx
│   │   ├── PharaohsSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── LearningCampsSection.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── BookingModal.jsx
│   │   ├── EgyptianRatesModal.jsx
│   │   └── ...
│   ├── App.jsx          # Root application layout & state
│   ├── main.jsx         # DOM entrypoint
│   └── index.css        # Global Tailwind & typography styles
├── index.html           # HTML template with Google Fonts
├── vite.config.js       # Vite configuration
└── package.json         # Scripts and project dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- `npm` or `pnpm` / `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Islam-Shahat/Aswan-Nature.git
   cd Aswan-Nature
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🌿 Overview in Arabic | نظرة عامة

مشروع **Aswan Nature** منصة سياحية وبيئية متكاملة تهدف إلى تسليط الضوء على سياحة مراقبة الطيور والحياة البرية في أسوان ونهر النيل وبحيرة ناصر، مع ربط أصالة الطيور في الحضارة المصرية القديمة بالواقع الطبيعي المعاصر. تم تطوير المشروع بأحدث تقنيات الويب ليقدم تجربة مستخدم سريعة، تفاعلية، وتدعم اللغتين العربية والإنجليزية بشكل كامل.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
