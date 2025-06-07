import ContentPage from '@/components/ContentPage';
import Image from 'next/image';

export default function IsoPage() {
  return (
    <ContentPage 
      title="Understanding ISO in Film Photography"
      description="Learn how ISO affects your film's sensitivity to light and the resulting image characteristics."
      mainImage={{src: "https://placehold.co/800x400.png", alt: "Film box showing ISO rating", aiHint: "ISO rating"}}
    >
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">What is ISO?</h2>
        <p className="mb-4">
          <b>ISO (International Organization for Standardization)</b> in film photography refers to the <b>film's sensitivity to light</b>. It's a rating that indicates how much light is needed to create a properly exposed image. Common <b>ISO values</b> for film include 100, 200, 400, 800, 1600, and 3200.
        </p>
        <p className="mb-4">
          Your film camera will have an <b>ISO dial</b>. You must set this dial to match the ISO of the film you have loaded into the camera. This tells the camera's light meter (if it has one) how sensitive the film is, allowing it to suggest correct exposure settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Low ISO vs. High ISO</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-headline mb-2">Low ISO (e.g., ISO 100, 200)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>Less sensitive to light</b>.</li>
              <li><b>Requires more light</b> for proper exposure (ideal for bright, sunny days or studio lighting).</li>
              <li>Produces <b>finer grain</b>, resulting in <b>smoother and more detailed images</b>.</li>
              <li>Often preferred for landscapes, portraits, and situations where maximum image quality is desired.</li>
            </ul>
            <Image src="https://placehold.co/600x350.png" alt="Low ISO film grain example" width={600} height={350} className="rounded-md shadow-md mt-3 mx-auto" data-ai-hint="fine grain"/>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">High ISO (e.g., ISO 800, 1600, 3200)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><b>More sensitive to light</b>.</li>
              <li><b>Requires less light</b> for proper exposure (suitable for low-light conditions, indoor photography, or fast action).</li>
              <li>Produces <b>more noticeable grain</b>, which can be an aesthetic choice or a trade-off for shooting in difficult lighting.</li>
              <li>Allows for <b>faster shutter speeds or smaller apertures</b> in low light.</li>
            </ul>
            <Image src="https://placehold.co/600x350.png" alt="High ISO film grain example" width={600} height={350} className="rounded-md shadow-md mt-3 mx-auto" data-ai-hint="coarse grain"/>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Choosing the Right ISO</h2>
        <p className="mb-4">
          The choice of film ISO depends on:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li><b>Lighting Conditions:</b> Bright light allows for low ISO; dim light often necessitates high ISO.</li>
          <li><b>Desired Grain:</b> If you want minimal grain, choose a low ISO film. If you like a grainy aesthetic or need to shoot in low light, a high ISO film might be appropriate.</li>
          <li><b>Subject Matter:</b> For stationary subjects in good light, low ISO is great. For fast-moving subjects or handheld shooting in low light, high ISO allows for faster shutter speeds to prevent blur.</li>
        </ul>
        <p>
          Unlike digital cameras where you can change ISO for each shot, with film, the <b>ISO is fixed for the entire roll</b>. Choose your film roll wisely based on the conditions you anticipate shooting in.
        </p>
      </section>

       <section>
        <h2 className="text-3xl font-headline mb-4">Pushing and Pulling Film</h2>
        <p>
          <b>"Pushing"</b> film means <b>shooting it at a higher ISO</b> than its box speed (e.g., shooting ISO 400 film at ISO 800 or 1600) and then <b>compensating during development</b>. This <b>increases sensitivity and contrast</b>, often with <b>more grain</b>. <b>"Pulling"</b> is the opposite—<b>shooting at a lower ISO</b> and <b>under-developing</b>, which <b>reduces contrast and grain</b>. These are <b>advanced techniques</b> that require specific development adjustments.
        </p>
      </section>
    </ContentPage>
  );
}
