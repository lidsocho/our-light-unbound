import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Artist } from "@/data/artists";
import ArtworkCard from "./ArtworkCard";

interface ArtistAccordionProps {
  artists: Artist[];
}

const ArtistAccordion = ({ artists }: ArtistAccordionProps) => {
  return (
    <section className="w-full px-4 py-8">
      <Accordion type="single" collapsible className="space-y-3">
        {artists.map((artist) => (
          <AccordionItem
            key={artist.name}
            value={artist.name}
            className="border-none"
          >
            <AccordionTrigger className="artist-accordion-trigger" hideChevron>
              <span>{artist.name}</span>
              <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300" />
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2 px-2 md:px-4 animate-fade-in">
              {/* Artist Bio */}
              {artist.bio && (
                <div className="mb-6 p-4 md:p-5 rounded-lg bg-secondary/30 border border-border/50">
                  <h4 className="font-display text-lg text-primary mb-2 italic">
                    About the Artist
                  </h4>
                  <p className="font-body text-sm md:text-base text-foreground/85 leading-relaxed">
                    {artist.bio}
                  </p>
                </div>
              )}

              {/* Artworks */}
              <div className="space-y-4">
                <h4 className="font-display text-lg text-primary italic px-2">
                  Displayed Works
                </h4>
                {artist.artworks.map((artwork, artworkIndex) => (
                  <ArtworkCard
                    key={`${artist.name}-${artwork.title}-${artworkIndex}`}
                    artwork={artwork}
                    index={artworkIndex}
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ArtistAccordion;
