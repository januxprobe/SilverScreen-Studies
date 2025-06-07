import ContentPage from '@/components/ContentPage';
import Image from 'next/image';

export default function NaturePhotographyPage() {
  return (
    <ContentPage 
      title="Techniques for Nature Photography"
      description="Capture the beauty and grandeur of the natural world with these film photography tips for nature."
      mainImage={{src: "https://placehold.co/800x400.png", alt: "Stunning black and white nature landscape", aiHint: "nature landscape"}}
    >
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Planning and Patience</h2>
        <p className="mb-4">
          Great nature photography often starts before you even pick up the camera. <b>Research your location</b>, understand the <b>best times for light</b> (often <b>golden hour</b> - shortly after sunrise or before sunset), and <b>check weather conditions</b>. <b>Patience is key</b>; you might need to wait for the light to be just right or for wildlife to appear.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Composition in Nature</h2>
        <p className="mb-4">
          Many standard composition rules apply beautifully to nature:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><b>Rule of Thirds:</b> Position horizons, trees, or mountains along these lines.</li>
          <li><b>Leading Lines:</b> Use rivers, paths, or mountain ridges to guide the eye.</li>
          <li><b>Foreground Interest:</b> Include elements in the foreground (rocks, flowers, logs) to add depth and scale to landscapes.</li>
          <li><b>Framing:</b> Use tree branches or rock formations to frame a distant scene.</li>
        </ul>
        <Image src="https://placehold.co/700x400.png" alt="Nature photo with strong foreground interest" width={700} height={400} className="rounded-md shadow-md mx-auto" data-ai-hint="landscape foreground"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Lens Choice for Nature</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-headline mb-2">Wide-Angle Lenses (e.g., 20mm, 24mm, 35mm)</h3>
            <p>Excellent for capturing <b>expansive landscapes</b>, emphasizing a <b>sense of space</b>, and including <b>foreground elements</b>. Be mindful of potential distortion at very wide angles.</p>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Telephoto Lenses (e.g., 100mm, 200mm, 300mm+)</h3>
            <p>Ideal for <b>wildlife photography</b> (allowing you to shoot from a distance) and for <b>isolating details</b> in a landscape or <b>compressing distant mountain ranges</b>.</p>
          </div>
           <div>
            <h3 className="text-2xl font-headline mb-2">Macro Lenses</h3>
            <p>For capturing <b>extreme close-ups</b> of flowers, insects, textures, and other small details in nature.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Using Filters (Especially for B&W Film)</h2>
        <p className="mb-4">
          Filters can dramatically enhance black and white nature photography:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><b>Yellow Filter:</b> Slightly <b>darkens blue skies</b>, making <b>clouds stand out</b> more. A good general-purpose filter.</li>
          <li><b>Orange Filter:</b> <b>Darkens skies more significantly</b>, <b>increases contrast</b>, and can <b>cut through haze</b>.</li>
          <li><b>Red Filter:</b> Creates <b>very dramatic, dark (almost black) skies</b> and <b>high contrast</b>. Can make green foliage appear very dark.</li>
          <li><b>Green Filter:</b> <b>Lightens green foliage</b>, useful for separating tones in woodland scenes.</li>
          <li><b>Polarizing Filter:</b> <b>Reduces glare and reflections</b> from water and wet leaves, <b>deepens blue skies</b>, and <b>increases color saturation</b> (though its effect on B&W is primarily sky darkening and reflection control).</li>
        </ul>
        <Image src="https://placehold.co/600x300.png" alt="Comparison of B&W landscape with and without red filter" width={600} height={300} className="rounded-md shadow-md mt-3 mx-auto" data-ai-hint="filter landscape"/>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Depth of Field</h2>
        <p>
          For landscapes, you often want a <b>large depth of field</b> (everything from foreground to background in focus). This is achieved with <b>smaller apertures</b> (e.g., f/11, f/16, f/22). Remember that smaller apertures require longer shutter speeds or higher ISO film. A <b>tripod is often essential</b> for sharp landscape shots with large depth of field.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-headline mb-4">Respect Nature (Leave No Trace)</h2>
        <p>
          Always prioritize the well-being of the environment and wildlife. <b>Follow Leave No Trace principles</b>: stay on trails, don't disturb animals, pack out everything you pack in, and respect closures or protected areas.
        </p>
      </section>
    </ContentPage>
  );
}
