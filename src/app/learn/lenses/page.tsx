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
        <p className="mb-4">
          Focal length, measured in millimeters (mm), determines the angle of view and magnification of your lens. A shorter focal length (e.g., 24mm) provides a wider angle of view, capturing more of the scene. A longer focal length (e.g., 200mm) offers a narrower angle of view and higher magnification, bringing distant subjects closer.
        </p>
        <Image src="https://placehold.co/700x350.png" alt="Focal length comparison" width={700} height={350} className="rounded-md shadow-md mx-auto" data-ai-hint="focal length"/>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-headline mb-4">Types of Lenses</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-headline mb-2">Prime Lenses</h3>
            <p>Prime lenses have a fixed focal length (e.g., 50mm f/1.8). They are often sharper, have wider maximum apertures (letting in more light), and can be more compact than zoom lenses. They encourage photographers to move around to compose their shots.</p>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Zoom Lenses</h3>
            <p>Zoom lenses offer a range of focal lengths (e.g., 24-70mm). They provide versatility, allowing you to change your composition without changing lenses. However, they can be larger, heavier, and sometimes have smaller maximum apertures compared to primes.</p>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Wide-Angle Lenses</h3>
            <p>Typically lenses with focal lengths less than 35mm (on a full-frame camera). They are great for landscapes, architecture, and capturing expansive scenes. They can introduce distortion if not used carefully.</p>
            <Image src="https://placehold.co/600x300.png" alt="Wide-angle lens shot" width={600} height={300} className="rounded-md shadow-md mt-2" data-ai-hint="wide angle"/>
          </div>
          <div>
            <h3 className="text-2xl font-headline mb-2">Telephoto Lenses</h3>
            <p>Lenses with focal lengths greater than 70mm. Ideal for sports, wildlife, and portraits where you want to isolate the subject from the background. They compress perspective, making distant objects appear closer together.</p>
            <Image src="https://placehold.co/600x300.png" alt="Telephoto lens shot" width={600} height={300} className="rounded-md shadow-md mt-2" data-ai-hint="telephoto portrait"/>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline mb-4">Lens Mounts and Compatibility</h2>
        <p>
          Different camera brands and systems use different lens mounts. It's crucial to ensure that a lens is compatible with your film camera body. Common vintage mounts include M42 (Pentax Screw Mount), Nikon F-mount, Canon FD-mount, and Minolta SR-mount. Adapters can sometimes be used to mount lenses from one system to another, but this can affect functionality.
        </p>
      </section>
    </ContentPage>
  );
}
