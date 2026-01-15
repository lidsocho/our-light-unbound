import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "hours" | "events";
}

const InfoModal = ({ open, onOpenChange, type }: InfoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-primary italic">
            {type === "hours" ? "Gallery Hours" : "Upcoming Events"}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4 font-body text-foreground/90 space-y-4">
          {type === "hours" ? (
            <>
              <div className="space-y-2">
                <p className="font-medium text-foreground">Our Light UnBound Exhibition</p>
                <p className="text-muted-foreground">January 9 - 31, 2026</p>
              </div>
              <div className="space-y-1 text-sm">
                <p><span className="text-primary">Thursdays:</span> 4-8pm</p>
                <p><span className="text-primary">Fridays:</span> 4-8pm</p>
                <p><span className="text-primary">Saturdays:</span> 1-5pm</p>
                <p><span className="text-primary">Sundays:</span> 1-5pm</p>
              </div>
              <div className="space-y-1 text-sm mt-4">
                <p className="font-medium text-foreground">Exceptions</p>
                <p className="text-muted-foreground">Friday, Jan 9 - 4-9pm (Artwalk + Opening Night)</p>
                <p className="text-muted-foreground">Friday, Jan 30 - 4-6pm (shortened)</p>
              </div>
              <p className="text-sm text-muted-foreground italic mt-4">
                Free admission. All are welcome.
              </p>
            </>
          ) : (
            <>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <div className="p-3 rounded-md bg-secondary/30 border border-border/50">
                  <p className="font-medium text-foreground">Opening Night</p>
                  <p className="text-sm text-primary">Fri 01/09 - 6:00pm - 9:00pm</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    A community centered art exhibit featuring BIPOC artists & their stories.
                  </p>
                </div>
                <div className="p-3 rounded-md bg-secondary/30 border border-border/50">
                  <p className="font-medium text-foreground">Zine Making</p>
                  <p className="text-sm text-primary">Sat 01/10 - 3:00pm - 5:00pm</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Create a tetraflexagon! An interactive piece of art, led by a local art educator.
                  </p>
                </div>
                <div className="p-3 rounded-md bg-secondary/30 border border-border/50">
                  <p className="font-medium text-foreground">Artist Talk</p>
                  <p className="text-sm text-primary">Fri 01/16 - 6:00pm - 8:00pm</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Exhibited artists discuss their work. Ask, share, get inspired!
                  </p>
                </div>
                <div className="p-3 rounded-md bg-secondary/30 border border-border/50">
                  <p className="font-medium text-foreground">Collage</p>
                  <p className="text-sm text-primary">Sat 01/17 - 2:00pm - 5:00pm</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Congregate, cut, construct colorful compilations - capture contemplations.
                  </p>
                </div>
                <div className="p-3 rounded-md bg-secondary/30 border border-border/50">
                  <p className="font-medium text-foreground">Paint and Sip</p>
                  <p className="text-sm text-primary">Fri 01/23 - 6:00pm - 8:00pm</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Learn to paint your friend or partner from an experienced art teacher!
                  </p>
                </div>
                <div className="p-3 rounded-md bg-secondary/30 border border-border/50">
                  <p className="font-medium text-foreground">Origami</p>
                  <p className="text-sm text-primary">Sat 01/24 - 2:00pm - 5:00pm</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Meditative workshop to learn how to create a hanging origami mobile.
                  </p>
                </div>
                <div className="p-3 rounded-md bg-secondary/30 border border-border/50">
                  <p className="font-medium text-foreground">Closing Event</p>
                  <p className="text-sm text-primary">Sat 01/31 - 1:00pm - 5:00pm</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Final celebration to experience the exhibition.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mt-2">
                RSVP on Eventbrite! @OurLightUnBound
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
