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
          ISO (International Organization for Standardization) in film photography refers to the film's sensitivity to light. It's a rating that indicates how much light is needed to create a properly exposed image. Common ISO values for film include 100, 200, 400, 800, 1600, and 3200.
        </p>
        <p className="mb-4">
          Your film camera will have an ISO dial. You must set this dial to match the ISO of the film you have loaded into the camera. This tells the camera's light meter (if it has one) how sensitive the film is, allowing it to suggest correct exposure settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Low ISO vs. High ISO</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-headline mb-2">Low ISO (e.g., ISO 100, 200)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Less sensitive to light.</li>
              <li>Requires more light for proper exposure (ideal for bright, sunny days or studio lighting).</li>
              <li>Produces finer grain, resulting in smoother and more detailed images.</li>
              <li>Often preferred for landscapes, portraits, and situations where maximum image quality is desired.</li>
            </ul>
            <Image src="https://placehold.co/600x350.png" alt="Low ISO film grain example" width={600} height={350} className="rounded-md shadow-md mt-3 mx-auto" data-ai-hint="fine grain"/>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">High ISO (e.g., ISO 800, 1600, 3200)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>More sensitive to light.</li>
              <li>Requires less light for proper exposure (suitable for low-light conditions, indoor photography, or fast action).</li>
              <li>Produces more noticeable grain, which can be an aesthetic choice or a trade-off for shooting in difficult lighting.</li>
              <li>Allows for faster shutter speeds or smaller apertures in low light.</li>
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
          <li><strong>Lighting Conditions:</strong> Bright light allows for low ISO; dim light often necessitates high ISO.</li>
          <li><strong>Desired Grain:</strong> If you want minimal grain, choose a low ISO film. If you like a grainy aesthetic or need to shoot in low light, a high ISO film might be appropriate.</li>
          <li><strong>Subject Matter:</strong> For stationary subjects in good light, low ISO is great. For fast-moving subjects or handheld shooting in low light, high ISO allows for faster shutter speeds to prevent blur.</li>
        </ul>
        <p>
          Unlike digital cameras where you can change ISO for each shot, with film, the ISO is fixed for the entire roll. Choose your film roll wisely based on the conditions you anticipate shooting in.
        </p>
      </section>

       <section>
        <h2 className="text-3xl font-headline mb-4">Pushing and Pulling Film</h2>
        <p>
          "Pushing" film means shooting it at a higher ISO than its box speed (e.g., shooting ISO 400 film at ISO 800 or 1600) and then compensating during development. This increases sensitivity and contrast, often with more grain. "Pulling" is the opposite—shooting at a lower ISO and under-developing, which reduces contrast and grain. These are advanced techniques that require specific development adjustments.
        </p>
      </section>
    </ContentPage>
  );
}
