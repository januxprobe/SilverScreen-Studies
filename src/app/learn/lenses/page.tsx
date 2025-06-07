import ContentPage from '@/components/ContentPage';
import Image from 'next/image';

export default function LensesPage() {
  return (
    <ContentPage 
      title="Understanding Camera Lenses"
      description="Explore the world of camera lenses, their types, and how they impact your photography."
      mainImage={{src: "https://placehold.co/800x400.png", alt: "Collection of camera lenses", aiHint: "camera lenses"}}
    >
      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">What is Focal Length?</h2>
        <p className="mb-2">
          <b>Focal length</b>, measured in <b>millimeters (mm)</b>, determines the <b>angle of view</b> and <b>magnification</b> of your lens.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>A <b>shorter focal length</b> (e.g., 24mm) provides a <b>wider angle of view</b>, capturing more of the scene.</li>
            <li>A <b>longer focal length</b> (e.g., 200mm) offers a <b>narrower angle of view</b> and <b>higher magnification</b>, bringing distant subjects closer.</li>
        </ul>
        <Image src="https://placehold.co/700x350.png" alt="Focal length comparison" width={700} height={350} className="rounded-md shadow-md mx-auto" data-ai-hint="focal length"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Types of Lenses</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-headline mb-2">Prime Lenses</h3>
            <p><b>Prime lenses</b> have a <b>fixed focal length</b> (e.g., 50mm f/1.8). They are often <b>sharper</b>, have <b>wider maximum apertures</b> (letting in more light), and can be <b>more compact</b> than zoom lenses. They encourage photographers to move around to compose their shots.</p>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Zoom Lenses</h3>
            <p><b>Zoom lenses</b> offer a <b>range of focal lengths</b> (e.g., 24-70mm). They provide <b>versatility</b>, allowing you to change your composition without changing lenses. However, they can be larger, heavier, and sometimes have smaller maximum apertures compared to primes.</p>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Wide-Angle Lenses</h3>
            <p>Typically lenses with focal lengths <b>less than 35mm</b> (on a full-frame camera). They are great for <b>landscapes, architecture</b>, and capturing <b>expansive scenes</b>. They can introduce distortion if not used carefully.</p>
            <Image src="https://placehold.co/600x300.png" alt="Wide-angle lens shot" width={600} height={300} className="rounded-md shadow-md mt-2" data-ai-hint="wide angle"/>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Telephoto Lenses</h3>
            <p>Lenses with focal lengths <b>greater than 70mm</b>. Ideal for <b>sports, wildlife</b>, and <b>portraits</b> where you want to <b>isolate the subject</b> from the background. They <b>compress perspective</b>, making distant objects appear closer together.</p>
            <Image src="https://placehold.co/600x300.png" alt="Telephoto lens shot" width={600} height={300} className="rounded-md shadow-md mt-2" data-ai-hint="telephoto portrait"/>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline mb-4">Lens Mounts and Compatibility</h2>
        <p>
          Different camera brands and systems use <b>different lens mounts</b>. It's crucial to <b>ensure that a lens is compatible</b> with your film camera body. Common vintage mounts include M42 (Pentax Screw Mount), Nikon F-mount, Canon FD-mount, and Minolta SR-mount. <b>Adapters</b> can sometimes be used to mount lenses from one system to another, but this can affect functionality.
        </p>
      </section>
    </ContentPage>
  );
}
