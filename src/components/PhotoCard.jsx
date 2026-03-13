import { HeartIcon } from "./HeartIcon";

const PhotoCard = ({ photo, isFavourited, onToggleFavourite, onClick }) => {
  return (
    <div className="relative z-0 bg-white rounded-3xl sm:rounded-[1.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 sm:border-gray-100/50 ring-1 ring-gray-900/[0.03] sm:hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 transform sm:hover:-translate-y-2">
      <div 
        className="group relative overflow-hidden aspect-[4/5] cursor-zoom-in"
        onClick={() => onClick(photo)}
      >
        <img
          src={`https://picsum.photos/id/${photo.id}/600/750`}
          alt={`Photo by ${photo.author}`}
          className="w-full h-full object-cover transition-transform duration-700 sm:group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 sm:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-3 sm:p-5">
          <p className="text-white/60 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest mb-0.5 sm:mb-1 translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 delay-75">Curated</p>
          <h4 className="text-white font-bold text-sm sm:text-lg leading-tight translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 delay-100">{photo.author}</h4>
          <span className="mt-2 sm:mt-3 text-white/40 text-[8px] sm:text-[10px] font-bold flex items-center gap-1 translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 delay-150 uppercase tracking-tighter">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            Click to View
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-t border-gray-50">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-[10px] sm:text-xs text-white font-bold flex-shrink-0 shadow-md shadow-violet-100">
            {photo.author.charAt(0).toUpperCase()}
          </div>
          <p className="text-xs sm:text-sm font-bold text-gray-800 truncate tracking-tight">
            {photo.author}
          </p>
        </div>

        {/* Heart / Favourite Button */}
        <button
          id={`fav-btn-${photo.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavourite(photo);
          }}
          aria-label={isFavourited ? "Remove from favourites" : "Add to favourites"}
          className={`group/heart flex-shrink-0 p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl transition-all duration-300 ${
            isFavourited
              ? "text-rose-500 bg-rose-50 shadow-inner"
              : "text-gray-300 bg-gray-50/50 sm:hover:bg-rose-50 sm:hover:text-rose-400 border border-transparent sm:hover:border-rose-100"
          }`}
        >
          <div className="transform transition-transform duration-300 sm:group-hover/heart:scale-125 active:scale-90 w-4 h-4 sm:w-5 sm:h-5">
            <HeartIcon filled={isFavourited} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
