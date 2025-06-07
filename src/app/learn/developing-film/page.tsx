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
          When you expose film in your camera, a <b>'latent image'</b> is formed by light hitting the <b>silver halide crystals</b> in the film emulsion. This image is invisible. The <b>developing process</b> uses a series of <b>chemical reactions</b> to convert this latent image into a <b>visible, permanent negative</b> (for negative films) or <b>positive</b> (for slide films).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Basic Steps in B&W Film Developing</h2>
        <p className="mb-4">
          While color developing (C-41 for negatives, E-6 for slides) is more complex and temperature-critical, black and white film developing is relatively accessible for home processing. Here's a simplified overview:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-4">
          <li>
            <b>Loading the Film (Total Darkness):</b> The exposed film must be removed from its canister or spool and loaded onto a developing reel, then placed into a light-tight developing tank. This step MUST be done in <b>complete darkness</b>.
            <Image src="https://placehold.co/600x300.png" alt="Film developing tank and reels" width={600} height={300} className="rounded-md shadow-md mt-2 mx-auto" data-ai-hint="developing tank"/>
          </li>
          <li>
            <b>Developer:</b> The developer chemical <b>converts the exposed silver halide crystals into metallic silver</b>, making the image visible. Development time and temperature are critical and vary by film and developer. Agitation (gently inverting the tank) is required at regular intervals.
          </li>
          <li>
            <b>Stop Bath:</b> An acidic solution that <b>neutralizes the developer</b>, halting its action. This prevents over-development.
          </li>
          <li>
            <b>Fixer:</b> <b>Removes unexposed and undeveloped silver halide crystals</b>, making the image permanent and light-safe. Without fixing, the film would eventually turn black when exposed to light.
          </li>
          <li>
            <b>Wash:</b> <b>Rinses away residual fixer</b> and other chemicals. Thorough washing is crucial for archival permanence.
          </li>
          <li>
            <b>Wetting Agent (Optional):</b> A final rinse with a wetting agent (like Photo-Flo) helps <b>prevent water spots</b> as the film dries.
          </li>
          <li>
            <b>Drying:</b> The film is carefully hung to dry in a <b>dust-free environment</b>.
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
              <li><b>Convenient</b>, especially for beginners or those without space/time.</li>
              <li>Labs handle <b>C-41 and E-6 processes</b> which are more complex.</li>
              <li>Can offer services like <b>scanning and printing</b>.</li>
              <li><b>Cost can add up</b> over time.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Home Developing (especially B&W)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>More control</b> over the process (e.g., push/pull processing, choice of developers).</li>
              <li>Can be more <b>cost-effective</b> in the long run.</li>
              <li>A <b>rewarding, hands-on</b> part of the photographic process.</li>
              <li>Requires an <b>initial investment</b> in equipment and chemicals, and a space that can be made completely dark.</li>
              <li><b>Chemical handling and disposal</b> require care.</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-headline mb-4">Safety Precautions</h2>
        <p className="mb-2">
          When working with photographic chemicals, always:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Work in a <b>well-ventilated area</b>.</li>
          <li>Wear <b>gloves and eye protection</b>.</li>
          <li>Follow <b>manufacturer's instructions</b> for mixing and handling chemicals.</li>
          <li><b>Store chemicals safely</b> and <b>dispose of them responsibly</b> according to local regulations.</li>
        </ul>
      </section>
    </ContentPage>
  );
}
