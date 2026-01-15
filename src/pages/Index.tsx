import { useState, useMemo } from "react";
import ExhibitHeader from "@/components/ExhibitHeader";
import ExhibitIntro from "@/components/ExhibitIntro";
import ArtistAccordion from "@/components/ArtistAccordion";
import InfoModal from "@/components/InfoModal";
import SearchBar from "@/components/SearchBar";
import { artists, Artist, tagWallArtwork } from "@/data/artists";

const Index = () => {
  const [modalType, setModalType] = useState<"hours" | "events" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArtists = useMemo(() => {
    if (!searchQuery.trim()) return artists;

    const query = searchQuery.toLowerCase();

    return artists
      .map((artist) => {
        const artistNameMatch = artist.name.toLowerCase().includes(query);
        const artistBioMatch = artist.bio.toLowerCase().includes(query);

        const matchingArtworks = artist.artworks.filter(
          (artwork) =>
            artwork.title.toLowerCase().includes(query) ||
            artwork.medium.toLowerCase().includes(query) ||
            artwork.description.toLowerCase().includes(query)
        );

        // Include artist if name/bio matches or has matching artworks
        if (artistNameMatch || artistBioMatch || matchingArtworks.length > 0) {
          return {
            ...artist,
            // Show all artworks if artist name/bio matches, otherwise only matching artworks
            artworks: artistNameMatch || artistBioMatch ? artist.artworks : matchingArtworks,
          };
        }
        return null;
      })
      .filter((artist): artist is Artist => artist !== null);
  }, [searchQuery]);

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-2xl mx-auto">
        <ExhibitHeader
          onGalleryHoursClick={() => setModalType("hours")}
          onUpcomingEventsClick={() => setModalType("events")}
        />

        <ExhibitIntro />

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {filteredArtists.length > 0 ? (
          <ArtistAccordion artists={filteredArtists} />
        ) : (
          <div className="px-4 py-12 text-center">
            <p className="font-body text-muted-foreground">
              No artists or artworks found matching "{searchQuery}"
            </p>
          </div>
        )}

        {/* Tag Wall Section */}
        <section className="px-4 py-8 border-t border-border">
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={tagWallArtwork.image}
                alt={tagWallArtwork.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-foreground">
                {tagWallArtwork.title}
              </h2>
              <p className="font-body text-muted-foreground">
                {tagWallArtwork.artist}
              </p>
              <p className="font-body text-foreground">
                {tagWallArtwork.description}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center">
          <p className="font-body text-sm text-muted-foreground">
            &copy; 2026 Our Light UnBound Exhibition
          </p>
        </footer>
      </div>

      <InfoModal
        open={modalType !== null}
        onOpenChange={(open) => !open && setModalType(null)}
        type={modalType || "hours"}
      />
    </div>
  );
};

export default Index;
