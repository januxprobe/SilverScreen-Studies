import ContentPage from '@/components/ContentPage';
import Image from 'next/image';

export default function DevelopingFilmPage() {
  return (
    <ContentPage 
      title="Introduction to Film Developing"
      description="An overview of the process of developing photographic film, turning your latent images into visible negatives or positives."
      mainImage={{src: "https://placehold.co/800x400.png", alt: "Darkroom equipment for film developing", aiHint: "darkroom equipment"}}
    >
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Why Develop Film?</h2>
        <p className="mb-4">
          When you expose film in your camera, a 'latent image' is formed by light hitting the silver halide crystals in the film emulsion. This image is invisible. The developing process uses a series of chemical reactions to convert this latent image into a visible, permanent negative (for negative films) or positive (for slide films).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Basic Steps in B&W Film Developing</h2>
        <p className="mb-4">
          While color developing (C-41 for negatives, E-6 for slides) is more complex and temperature-critical, black and white film developing is relatively accessible for home processing. Here's a simplified overview:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-4">
          <li>
            <strong>Loading the Film (Total Darkness):</strong> The exposed film must be removed from its canister or spool and loaded onto a developing reel, then placed into a light-tight developing tank. This step MUST be done in complete darkness.
            <Image src="https://placehold.co/600x300.png" alt="Film developing tank and reels" width={600} height={300} className="rounded-md shadow-md mt-2 mx-auto" data-ai-hint="developing tank"/>
          </li>
          <li>
            <strong>Developer:</strong> The developer chemical converts the exposed silver halide crystals into metallic silver, making the image visible. Development time and temperature are critical and vary by film and developer. Agitation (gently inverting the tank) is required at regular intervals.
          </li>
          <li>
            <strong>Stop Bath:</strong> An acidic solution that neutralizes the developer, halting its action. This prevents over-development.
          </li>
          <li>
            <strong>Fixer:</strong> Removes unexposed and undeveloped silver halide crystals, making the image permanent and light-safe. Without fixing, the film would eventually turn black when exposed to light.
          </li>
          <li>
            <strong>Wash:</strong> Rinses away residual fixer and other chemicals. Thorough washing is crucial for archival permanence.
          </li>
          <li>
            <strong>Wetting Agent (Optional):</strong> A final rinse with a wetting agent (like Photo-Flo) helps prevent water spots as the film dries.
          </li>
          <li>
            <strong>Drying:</strong> The film is carefully hung to dry in a dust-free environment.
          </li>
        </ol>
        <p>Once dry, the negatives are ready for scanning or printing in a darkroom.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Lab Developing vs. Home Developing</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-headline mb-2">Lab Developing</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Convenient, especially for beginners or those without space/time.</li>
              <li>Labs handle C-41 and E-6 processes which are more complex.</li>
              <li>Can offer services like scanning and printing.</li>
              <li>Cost can add up over time.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Home Developing (especially B&W)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>More control over the process (e.g., push/pull processing, choice of developers).</li>
              <li>Can be more cost-effective in the long run.</li>
              <li>A rewarding, hands-on part of the photographic process.</li>
              <li>Requires an initial investment in equipment and chemicals, and a space that can be made completely dark.</li>
              <li>Chemical handling and disposal require care.</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-headline mb-4">Safety Precautions</h2>
        <p>
          When working with photographic chemicals, always:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Work in a well-ventilated area.</li>
          <li>Wear gloves and eye protection.</li>
          <li>Follow manufacturer's instructions for mixing and handling chemicals.</li>
          <li>Store chemicals safely and dispose of them responsibly according to local regulations.</li>
        </ul>
      </section>
    </ContentPage>
  );
}
