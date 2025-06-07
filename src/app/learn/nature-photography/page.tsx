import ContentPage from '@/components/ContentPage';
import Image from 'next/image';

export default function NaturePhotographyPage() {
  return (
    <ContentPage 
      title="Techniques for Nature Photography"
      description="Capture the beauty and grandeur of the natural world with these film photography tips for nature."
      mainImage={{src: "https://placehold.co/800x400.png", alt: "Stunning black and white nature landscape", aiHint: "nature landscape Ansel Adams style"}}
    >
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Planning and Patience</h2>
        <p className="mb-4">
          Great nature photography often starts before you even pick up the camera. Research your location, understand the best times for light (often golden hour - shortly after sunrise or before sunset), and check weather conditions. Patience is key; you might need to wait for the light to be just right or for wildlife to appear.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Composition in Nature</h2>
        <p className="mb-4">
          Many standard composition rules apply beautifully to nature:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Rule of Thirds:</strong> Position horizons, trees, or mountains along these lines.</li>
          <li><strong>Leading Lines:</strong> Use rivers, paths, or mountain ridges to guide the eye.</li>
          <li><strong>Foreground Interest:</strong> Include elements in the foreground (rocks, flowers, logs) to add depth and scale to landscapes.</li>
          <li><strong>Framing:</strong> Use tree branches or rock formations to frame a distant scene.</li>
        </ul>
        <Image src="https://placehold.co/700x400.png" alt="Nature photo with strong foreground interest" width={700} height={400} className="rounded-md shadow-md mx-auto" data-ai-hint="landscape foreground interest black white"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Lens Choice for Nature</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-headline mb-2">Wide-Angle Lenses (e.g., 20mm, 24mm, 35mm)</h3>
            <p>Excellent for capturing expansive landscapes, emphasizing a sense of space, and including foreground elements. Be mindful of potential distortion at very wide angles.</p>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Telephoto Lenses (e.g., 100mm, 200mm, 300mm+)</h3>
            <p>Ideal for wildlife photography (allowing you to shoot from a distance) and for isolating details in a landscape or compressing distant mountain ranges.</p>
          </div>
           <div>
            <h3 className="text-2xl font-headline mb-2">Macro Lenses</h3>
            <p>For capturing extreme close-ups of flowers, insects, textures, and other small details in nature.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Using Filters (Especially for B&W Film)</h2>
        <p className="mb-4">
          Filters can dramatically enhance black and white nature photography:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Yellow Filter:</strong> Slightly darkens blue skies, making clouds stand out more. A good general-purpose filter.</li>
          <li><strong>Orange Filter:</strong> Darkens skies more significantly, increases contrast, and can cut through haze.</li>
          <li><strong>Red Filter:</strong> Creates very dramatic, dark (almost black) skies and high contrast. Can make green foliage appear very dark.</li>
          <li><strong>Green Filter:</strong> Lightens green foliage, useful for separating tones in woodland scenes.</li>
          <li><strong>Polarizing Filter:</strong> Reduces glare and reflections from water and wet leaves, deepens blue skies, and increases color saturation (though its effect on B&W is primarily sky darkening and reflection control).</li>
        </ul>
        <Image src="https://placehold.co/600x300.png" alt="Comparison of B&W landscape with and without red filter" width={600} height={300} className="rounded-md shadow-md mt-3 mx-auto" data-ai-hint="filter comparison landscape black white"/>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Depth of Field</h2>
        <p>
          For landscapes, you often want a large depth of field (everything from foreground to background in focus). This is achieved with smaller apertures (e.g., f/11, f/16, f/22). Remember that smaller apertures require longer shutter speeds or higher ISO film. A tripod is often essential for sharp landscape shots with large depth of field.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-headline mb-4">Respect Nature (Leave No Trace)</h2>
        <p>
          Always prioritize the well-being of the environment and wildlife. Follow Leave No Trace principles: stay on trails, don't disturb animals, pack out everything you pack in, and respect closures or protected areas.
        </p>
      </section>
    </ContentPage>
  );
}
