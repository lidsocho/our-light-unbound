import heroGlow from "@/assets/hero-glow-cropped.jpg";

const ExhibitIntro = () => {
  return (
    <section className="w-full px-4 py-8 flex justify-center">
      <div className="exhibit-card max-w-lg w-full relative overflow-hidden">
        {/* Hero glow image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src={heroGlow} alt="" className="w-full h-full object-cover opacity-40 blur-sm" />
        </div>

        <div className="relative z-10">
          <h1 className="font-display text-4xl md:text-5xl italic font-medium text-foreground mb-1">Our Light</h1>
          <h1 className="font-display text-4xl md:text-5xl italic font-medium text-foreground mb-3">UnBound</h1>
          <p className="font-display text-xl md:text-2xl text-primary italic mb-6">
            Jan 9-31, 2026
          </p>

          <div className="space-y-4 text-foreground/90 font-body text-sm md:text-base leading-relaxed">
            <p>
              This exhibition is about tapping into that piece of ourselves that we turn to in times of trouble.
              That part of ourselves that believes peace will return, that inspires us to believe, hope, and dream again.
            </p>
            <p>
              And once we are whole that part shines brightly.
            </p>
            <p>
              It is our light and when we are free it is unbound.
            </p>
            <p>
              We hope this show will inspire you and move you to reflect on all that you have gone through.
              Use that strength to create and make the world your own.
            </p>
          </div>

          <p className="mt-8 font-display text-lg italic text-primary">Scroll to explore our catalogue</p>
        </div>
      </div>
    </section>
  );
};

export default ExhibitIntro;
