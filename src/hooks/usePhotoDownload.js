import { useState, useCallback } from "react";

const usePhotoDownload = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadPhoto = useCallback(async (photo) => {
    if (!photo) return;
    
    setDownloading(true);
    try {
      const imageUrl = `https://picsum.photos/id/${photo.id}/${photo.width}/${photo.height}`;
      const response = await fetch(imageUrl);
      
      if (!response.ok) throw new Error("Network response was not ok");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `celebrare-photo-${photo.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);

      const existing = JSON.parse(localStorage.getItem("downloaded-photos") || "[]");
      if (!existing.some(p => p.id === photo.id)) {
        localStorage.setItem("downloaded-photos", JSON.stringify([...existing, photo]));
      }

      return true;
    } catch (err) {
      console.error("Download failed", err);
      return false;
    } finally {
      setDownloading(false);
    }
  }, []);

  return { downloadPhoto, downloading };
};

export default usePhotoDownload;
