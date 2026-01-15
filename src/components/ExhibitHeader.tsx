import { Clock, Calendar, Mail } from "lucide-react";

interface ExhibitHeaderProps {
  onGalleryHoursClick: () => void;
  onUpcomingEventsClick: () => void;
}

const ExhibitHeader = ({
  onGalleryHoursClick,
  onUpcomingEventsClick
}: ExhibitHeaderProps) => {
  return (
    <header className="w-full pt-6 pb-4 px-4">
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        <button onClick={onGalleryHoursClick} className="btn-gold-outline flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Gallery Hours
        </button>
        <button onClick={onUpcomingEventsClick} className="btn-gold-outline flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Upcoming Events
        </button>
        <a href="mailto:artist.lidia.ochoa@gmail.com" className="btn-gold-outline flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Contact for Purchasing Details
        </a>
      </div>
    </header>
  );
};

export default ExhibitHeader;
