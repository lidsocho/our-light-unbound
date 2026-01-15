import { useState } from "react";
import { Artwork } from "@/data/artists";
import { ImageIcon, ZoomIn } from "lucide-react";
import ImageModal from "./ImageModal";

interface ArtworkCardProps {
  artwork: Artwork;
  index: number;
}

const ArtworkCard = ({ artwork, index }: ArtworkCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article
      className="artwork-item"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image - show actual image if available, otherwise placeholder */}
      <div className="w-full aspect-[4/3] mb-4 rounded-lg bg-secondary/40 border border-border/50 flex items-center justify-center overflow-hidden relative group">
        {artwork.image ? (
          <>
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-full object-cover scale-110 transition-transform duration-300 group-hover:scale-115 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
            {/* Zoom icon overlay on hover */}
            <div
              className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ImageIcon className="w-12 h-12 opacity-50" />
            <span className="text-sm font-body">Artwork Image</span>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
        <h5 className="font-display text-xl md:text-2xl text-foreground font-medium">
          {artwork.title}
        </h5>
        <span className="font-body text-sm text-primary font-semibold shrink-0">
          {artwork.price}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground font-body mb-3">
        <span>{artwork.year}</span>
        <span className="hidden md:inline">•</span>
        <span>{artwork.medium}</span>
        <span className="hidden md:inline">•</span>
        <span>{artwork.dimensions}</span>
      </div>

      {artwork.description && (
        <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
          {artwork.description}
        </p>
      )}

      {/* Image Modal for full-size viewing */}
      {artwork.image && (
        <ImageModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          imageSrc={artwork.image}
          imageAlt={artwork.title}
          title={artwork.title}
        />
      )}
    </article>
  );
};

export default ArtworkCard;
