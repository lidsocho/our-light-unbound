import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSrc: string;
  imageAlt: string;
  title?: string;
}

const ImageModal = ({ open, onOpenChange, imageSrc, imageAlt, title }: ImageModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-transparent border-none shadow-none">
        <div className="relative flex flex-col items-center">
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute -top-10 right-0 p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors z-10"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Full-size image */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
          />

          {/* Title caption */}
          {title && (
            <div className="mt-4 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-lg">
              <p className="font-display text-lg text-foreground text-center">{title}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
