import { useState } from "react";
import Gallery from "./components/Gallery";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavourites, setShowFavourites] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="min-h-screen bg-[#fcfcfd] selection:bg-violet-100 selection:text-violet-900">
      {/* Background blobs for premium feel */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-violet-200/30 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-pink-100/40 blur-[100px] rounded-full" />
      </div>

      {/* ── Header ── */}
      <header className={`sticky top-0 z-40 w-full bg-white/70 backdrop-blur-xl border-b border-gray-100/50 transition-all duration-500 ease-in-out ${
        selectedPhoto ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            {/* Brand Logo */}
            <div 
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => {setSearchQuery(""); setShowFavourites(false);}}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-200 group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zM5 6a1 1 0 011-1h12a1 1 0 011 1v7.586l-2.293-2.293a1 1 0 00-1.414 0L10 16.586l-1.293-1.293a1 1 0 00-1.414 0L5 17.586V6zm9 3a1 1 0 112 0 1 1 0 01-2 0z" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <h2 className="font-black text-xl text-gray-900 tracking-tight leading-none">Celebrare</h2>
                <p className="text-[10px] text-violet-500 font-bold uppercase tracking-[0.2em] mt-0.5">Photo Gallery</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400 group-focus-within:text-violet-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                id="search-input"
                type="text"
                placeholder="Search by photographer name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl border-none bg-gray-100/50 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-500/20 focus:bg-white transition-all duration-300 shadow-inner font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-3 flex items-center px-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFavourites((prev) => !prev)}
                className={`h-9 sm:h-11 px-4 sm:px-5 rounded-xl sm:rounded-2xl flex items-center gap-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  showFavourites
                    ? "bg-rose-500 text-white shadow-lg shadow-rose-200 border-none scale-105"
                    : "bg-white text-gray-700 border border-gray-100 hover:border-rose-200 hover:text-rose-500 shadow-sm"
                }`}
              >
                <svg viewBox="0 0 24 24" fill={showFavourites ? "white" : "none"} stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="hidden md:inline">{showFavourites ? "All Photos" : "Favourites"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 relative z-10">
        <div className="mb-6 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              {showFavourites ? (
                <span className="flex items-center gap-3">
                  My Favourites <span className="text-rose-500">♥</span>
                </span>
              ) : (
                <>Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">Visual Art</span></>
              )}
            </h1>
            <p className="text-lg text-gray-500 font-medium max-w-2xl">
              {showFavourites
                ? "A curated collection of your most loved photographs from our gallery."
                : "Explore high-resolution photography curated by the world's most talented creators."}
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full border border-gray-100/50">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live Feed
          </div>
        </div>

        <Gallery 
          searchQuery={searchQuery} 
          showFavourites={showFavourites} 
          selectedPhoto={selectedPhoto}
          onPhotoSelect={setSelectedPhoto}
        />
      </main>

      {/* ── Footer ── */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-400 text-sm font-medium">
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-violet-500 transition-colors">About</a>
          <a href="#" className="hover:text-violet-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-violet-500 transition-colors">Terms</a>
        </div>
        <p>© 2026 Celebrare Gallery · Powered by Picsum</p>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center hover:text-violet-500 transition-colors cursor-pointer">IG</div>
          <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center hover:text-violet-500 transition-colors cursor-pointer">TW</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
