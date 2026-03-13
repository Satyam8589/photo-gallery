# 📸 Celebrare Photo Gallery

A premium, high-performance Photo Gallery web application built with **React**, **Vite**, and **Tailwind CSS**. This project was developed as a pre-screening assignment for the Celebrare Frontend Internship.

## ✨ Features

- **Dynamic Data Fetching**: Fetches 30 high-quality photos from the Picsum Photos API on load.
- **Real-time Search Filter**: Instant filtering by photographer name using `useMemo` for high performance.
- **Immersive Viewing Experience**: Click any photo to open a beautiful, distraction-free modal with a "blur-up" loading effect.
- **Smart Favourites**: Toggle favourites using `useReducer`. Favourites are persisted across page refreshes using `localStorage`.
- **Responsive & Fluid UI**: Fully optimized for Mobile, Tablet, and Desktop with premium glassmorphism effects and smooth transitions.
- **Performance Optimized**: Extensive use of `useCallback` and `useMemo` to ensure minimal re-renders and smooth interactions.

## 🚀 Tech Stack

- **Framework**: React 19 (Functional Components + Hooks)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (Vanilla CSS for custom animations)
- **State Management**: `useReducer` for complex business logic (Favourites)
- **Icons**: Custom SVG icons

## 🛠️ Project Structure

```text
photo-gallery/
├── src/
│   ├── components/         # UI Components (Gallery, PhotoCard, Modal, etc.)
│   ├── hooks/              # Custom Hooks (useFetchPhotos)
│   ├── reducers/           # State logic (favouritesReducer)
│   ├── App.jsx             # Main logic & Navbar hide/show transitions
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles & Tailwind config
├── index.html              # SEO optimized metadata
└── tailwind.config.js      # Custom theme & styling tokens
```

## 📦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/photo-gallery.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## 🎥 Video Explanation

The following points are covered in the mandatory screen recording:
1. **Live Demo**: Showcasing API fetch, real-time search, and persistent favourites.
2. **Custom Hooks**: Walkthrough of `useFetchPhotos`.
3. **State Management**: Explanation of why `useReducer` was used over `useState`.
4. **Performance**: Breakdown of `useCallback` and `useMemo` logic to prevent unnecessary re-renders.

---
Built with ♥ for Celebrare by Satyam kumar singh
